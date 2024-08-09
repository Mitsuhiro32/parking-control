import serial
import time
import datetime
import psycopg2

# Configurar la conexión con la base de datos
# connection = psycopg2.connect(user='postgres', password='postgres32', host='localhost', dbname='parking') # Conexión local
connection = psycopg2.connect(user='parking_owner', password='eDqngUYu3Xr9', host='ep-floral-frog-a56nanx1.us-east-2.aws.neon.tech', dbname='parking') # Conexión remota
connection.autocommit = True

# Crear un cursor para ejecutar consultas
cursor = connection.cursor()

# Variable global para almacenar el usuario
usuarioID = None
estacionamientoID = None
registroID = None
fecha_entrada = None

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

    # Obtener la fecha actual
    fecha_actual = datetime.date.today().strftime('%Y-%m-%d')

    # Consulta para obtener el registro de entrada del usuario en el estacionamiento en el día actual
    consulta = f"SELECT * FROM registros WHERE usuario_id = '{usuarioID}' AND estacionamiento_id = '{estacionamientoID}' AND fecha_hora_entrada IS NOT NULL AND fecha_hora_salida IS NULL AND fecha_hora_entrada::date = '{fecha_actual}'"
    cursor.execute(consulta)
    result = cursor.fetchone()
    registroID = result[0] if result is not None else None # Retorna el id del registro si existe, None en caso contrario

    # Retorna True si el usuario ya ha ingresado en el estacionamiento en el día actual, False en caso contrario
    if registroID is None:
        return False
    else:
        return True

# Función para validar si un usuario ya ha ingresado en el estacionamiento y no haya salido en el día
def validar_registro_salida():
    global usuarioID
    global estacionamientoID
    global registroID
    global fecha_entrada

    # Obtener la fecha actual
    fecha_actual = datetime.date.today().strftime('%Y-%m-%d')

    # Consulta para obtener el registro de entrada del usuario en el estacionamiento
    consulta = f"SELECT * FROM registros WHERE usuario_id = '{usuarioID}' AND estacionamiento_id = '{estacionamientoID}' AND fecha_hora_entrada IS NOT NULL AND fecha_hora_salida IS NULL"

    cursor.execute(consulta)
    resultados = cursor.fetchall()
    print(resultados)

    for result in resultados:
        fecha_entrada = result[3] if result is not None else None
        fecha_entrada_registro = fecha_entrada.date().strftime('%Y-%m-%d')

        # Validar si la fecha de entrada del registro es diferente a la fecha actual
        if fecha_entrada_registro != fecha_actual:
            registroID = result[0] if result is not None else None
            fecha_entrada = datetime.datetime.strptime(fecha_entrada.strftime('%Y-%m-%d %H:%M:%S'), '%Y-%m-%d %H:%M:%S')

        # Llamar a agregar_registro_salida para cada registro sin salida
        agregar_registro_salida()

# Función para agregar la fecha y hora de salida al registro si el usuario ya ha ingresado en el estacionamiento y no ha salido en el día
def agregar_registro_salida():
    global registroID
    global fecha_entrada

    fecha_hora = fecha_entrada.replace(hour=23, minute=59, second=59) # Establecer la hora de salida a las 23:59:59
    fecha_hora_salida = fecha_hora.strftime('%Y-%m-%d %H:%M:%S')

    consulta = f"UPDATE registros SET fecha_hora_salida = '{fecha_hora_salida}' WHERE id = '{registroID}'"
    cursor.execute(consulta)
    restar_ocupado()

# Función para validar si el estacionamiento está lleno
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

# Función para validar si el usuario está habilitado para el día actual
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
    sumar_ocupado()

# Función para actualizar el registro de entrada
def actualizar_registro_salida():
    global registroID
    # Obtener la fecha y hora actual
    fecha_hora_actual = datetime.datetime.now()

    # Formatear la fecha y hora actual como un timestamp
    timestamp = fecha_hora_actual.strftime("%Y-%m-%d %H:%M:%S")

    consulta = f"UPDATE registros SET fecha_hora_salida = '{timestamp}' WHERE id = '{registroID}'"
    cursor.execute(consulta)
    restar_ocupado()

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
        ser = serial.Serial('COM3', 9600)

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
                        validar_registro_salida() # Validar si el usuario ya ha ingresado en el estacionamiento y no ha salido en ese día y agregar la fecha y hora de salida al registro con la hora de salida a las 23:59:59
                        if validar_registro(): # Si el usuario ya ha ingresado en el estacionamiento en el día actual
                            actualizar_registro_salida()
                            ser.write(b'Hasta Pronto....') # Envía datos al puerto serie
                        else: # Si el usuario no ha ingresado en el estacionamiento en el día actual
                            if estacionamiento_lleno(): # Validar si el estacionamiento está lleno
                                if usuario_habilitado(): # Validar si el usuario está habilitado
                                    registrar_entrada()
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
