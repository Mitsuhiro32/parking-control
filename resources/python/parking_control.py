import serial
import time
import datetime
import psycopg2

# Configurar la conexión con la base de datos
connection = psycopg2.connect(user='postgres', password='postgres32', host='localhost', dbname='parking')
connection.autocommit = True

# Crear un cursor para ejecutar consultas
cursor = connection.cursor()

# Variable global para almacenar el usuario
usuarioID = None
estacionamientoID = None
registroID = None

# Validar el usuario y si ese usuario está activo
def validar_usuario(uid):
    global usuarioID
    consultaUsuario = f"SELECT * FROM users WHERE uid_tarjeta = '{uid}' AND estado = True"
    cursor.execute(consultaUsuario)
    result = cursor.fetchone()
    usuarioID = result[0] if result is not None else None # Retorna el id del usuario si existe, None en caso contrario

    if usuarioID is None:
        return False
    else:
        return True

# Validar el estacionamiento
def validar_estacionamiento(est):
    global estacionamientoID
    consultaEstacionamiento = f"SELECT * FROM estacionamientos WHERE nombre = '{est}' AND estado = True"
    cursor.execute(consultaEstacionamiento)
    result = cursor.fetchone()
    estacionamientoID = result[0] if result is not None else None # Retorna el id del estacionamiento si existe, None en caso contrario

    if estacionamientoID is None:
        return False
    else:
        return True

# Función para validar si un usuario ya ha ingresado en el estacionamiento en el día actual
def validar_registro():
    global usuarioID
    global estacionamientoID
    global registroID
    consulta = f"SELECT * FROM registros WHERE usuario_id = '{usuarioID}' AND estacionamiento_id = '{estacionamientoID}' AND fecha_hora_entrada IS NOT NULL AND fecha_hora_salida IS NULL"
    cursor.execute(consulta)
    result = cursor.fetchone()
    registroID = result[0] if result is not None else None # Retorna el id del registro si existe, None en caso contrario

    # Retorna True si el usuario ya ha ingresado en el estacionamiento en el día actual, False en caso contrario
    if registroID is None:
        return False
    else:
        return True

def estacionamiento_lleno():
    global estacionamientoID
    consulta = f"SELECT * FROM estacionamientos WHERE id = '{estacionamientoID}' AND ocupado < capacidad"
    cursor.execute(consulta)
    result = cursor.fetchone()
    estacionamientoID = result[0] if result is not None else None # Retorna el id del estacionamiento si existe, None en caso contrario

    if estacionamientoID is None: # Si el estacionamiento está lleno
        return False
    else: # Si el estacionamiento no está lleno
        return True

def usuario_habilitado():
    dias_semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

    # Obtener el número del día de la semana (0 = Lunes, 1 = Martes, etc.)
    numero_dia = datetime.datetime.today().weekday()

    # Obtener el nombre del día de la semana
    nombre_dia = dias_semana[numero_dia]

    global usuarioID
    consulta = f"SELECT * FROM dia_usuarios WHERE usuario_id = '{usuarioID}' AND dia = '{nombre_dia}'"
    cursor.execute(consulta)
    result = cursor.fetchone()
    usuarioID = result[1] if result is not None else None # Retorna el id del usuario si existe, None en caso contrario

    if usuarioID is None: # Si el usuario no está habilitado
        return False
    else: # Si el usuario está habilitado
        return True

# Función para guardar los registros de entrada
def registrar_entrada():
    global usuarioID
    global estacionamientoID
    # Obtener la fecha y hora actual
    fecha_hora_actual = datetime.datetime.now()

    # Formatear la fecha y hora actual como un timestamp
    timestamp = fecha_hora_actual.strftime("%Y-%m-%d %H:%M:%S")

    consulta = f"INSERT INTO registros (usuario_id, estacionamiento_id, fecha_hora_entrada) VALUES ('{usuarioID}','{estacionamientoID}','{timestamp}')"
    cursor.execute(consulta)

# Función para actualizar el registro de entrada
def actualizar_registro_salida():
    global registroID
    # Obtener la fecha y hora actual
    fecha_hora_actual = datetime.datetime.now()

    # Formatear la fecha y hora actual como un timestamp
    timestamp = fecha_hora_actual.strftime("%Y-%m-%d %H:%M:%S")

    consulta = f"UPDATE registros SET fecha_hora_salida = '{timestamp}' WHERE id = '{registroID}'"
    cursor.execute(consulta)

# Función para sumar la ocupación del estacionamiento
def sumar_ocupado():
    global estacionamientoID
    consulta = f"UPDATE estacionamientos SET ocupado = ocupado+1 WHERE id = '{estacionamientoID}'"
    cursor.execute(consulta)

# Función para restar la ocupación del estacionamiento
def restar_ocupado():
    global estacionamientoID
    consulta = f"UPDATE estacionamientos SET ocupado = ocupado-1 WHERE id = '{estacionamientoID}' AND ocupado > 0"
    cursor.execute(consulta)

# * Función principal que escucha el puerto serial y realiza las validaciones
def comunicar_puerto_serial():
    try:
        # Configurar el puerto serial
        ser = serial.Serial('COM5', 9600)

        time.sleep(2)  # Espera 2 segundos para que el puerto se abra

        # Validar si el puerto serial está abierto
        if ser.isOpen():
            print("El puerto serial está abierto")

            while True:
                # Leer el dato del puerto serial
                dato = ser.readline().decode().strip()
                # Dividir los datos en dos partes usando la coma como separador
                datoUID,datoEstacionamiento = dato.split(',')

                print(datoUID)
                print(datoEstacionamiento)

                # Validar si el dato pertenece a un usuario
                if validar_estacionamiento(datoEstacionamiento):
                    if validar_usuario(datoUID):
                        if validar_registro(): # Si el usuario ya ha ingresado en el estacionamiento en el día actual
                            actualizar_registro_salida()
                            restar_ocupado()
                            ser.write(b'Hasta Pronto....') # Envía datos al puerto serie
                        else: # Si el usuario no ha ingresado en el estacionamiento en el día actual
                            if estacionamiento_lleno(): # Validar si el estacionamiento está lleno
                                if usuario_habilitado(): # Validar si el usuario está habilitado
                                    registrar_entrada()
                                    sumar_ocupado()
                                    ser.write(b'Acceso Permitido') # Envía datos al puerto serie
                                else: # Si el usuario no está habilitado para ese día
                                    ser.write(b'Hoy no es tu dia') # Envía datos al puerto serie
                            else: # Si el estacionamiento está lleno
                                ser.write(b'Parking Lleno :(') # Envía datos al puerto serie
                    else: # Si el usuario no está activo
                        ser.write(b'Usuario invalido') # Envía datos al puerto serie
                else: # Si el estacionamiento no existe
                    ser.write(b'Parking invalido') # Envía datos al puerto serie
        else: # Si el puerto serial no está abierto
            print("El puerto serial no está abierto")
    except serial.SerialException: # Si el puerto serial no está disponible
        print("El puerto serial no está disponible")
    finally:
        ser.close() # Cerrar el puerto serial

# Ejecutar la función principal
comunicar_puerto_serial()
