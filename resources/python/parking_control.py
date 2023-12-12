import serial
import time
import datetime
import psycopg2

# Configurar la conexión con la base de datos
connection = psycopg2.connect(user='postgres', password='postgres32', host='localhost', dbname='parking')
connection.autocommit = True

# Función para validar si una persona está habilitada para el día y su estado está activo
def validar_datos(uid, estacionamiento):
    # Aquí puedes implementar la lógica para validar la persona en la base de datos
    # Retorna True si la persona está habilitada y su estado es activo, False en caso contrario
    pass

# Función para guardar los datos coincididos en una tabla
def guardar_datos(datos):
    # Aquí puedes implementar la lógica para guardar los datos en la base de datos
    pass

# Función para aumentar la ocupación del estacionamiento
def aumentar_ocupado():
    # Aquí puedes implementar la lógica para aumentar la ocupación del estacionamiento
    pass

def disminuir_ocupado():
    # Aquí puedes implementar la lógica para disminuir la ocupación del estacionamiento
    pass

# Función principal que escucha el puerto serial y realiza las validaciones
def escuchar_puerto_serial():
    try:
        # Configurar el puerto serial
        ser = serial.Serial('COM5', 9600)  # Reemplaza 'COM1' con el puerto serial correcto

        while True:
            if ser.isOpen():
                # Leer el dato del puerto serial
                dato = ser.readline().decode().strip()
                # Dividir los datos en dos partes usando la coma como separador
                datoUID, datoEstacionamiento = dato.split(',')
                # Validar si el dato pertenece a un usuario y está habilitada para el día
                if validar_datos(datoUID, datoEstacionamiento):
                    ser.write(b'd')  # Envía datos al puerto serie
                else:
                    ser.write(b'p') # Envía datos al puerto serie
            else:
                print("El puerto serial no está abierto")
    except serial.SerialException:
        print("El puerto serial no está disponible")

# Ejecutar la función principal
escuchar_puerto_serial()


# Función para comparar los datos con la base de datos
def comparar_datos(dato1, dato2):
    # Establecer conexión con la base de datos
    cursor = connection.cursor()

    # Ejecutar consulta para buscar coincidencias en la base de datos
    consultaUID = f"SELECT * FROM users WHERE uid_tarjeta = '{dato1}'"
    cursor.execute(consultaUID)
    resultado = cursor.fetchone()

    consultaEstacionamiento = f"SELECT * FROM estacionamientos WHERE nombre = '{dato2}'"
    cursor.execute(consultaEstacionamiento)
    resultado2 = cursor.fetchone()

    # Cerrar conexión con la base de datos
    cursor.close()

    # Devolver True si se encontró una coincidencia, False en caso contrario
    if resultado:
        return True
    else:
        return False

def usuarioHabilitado(usuario):
    return True

try:
    # Configurar el puerto serial
    puerto_serie = serial.Serial('COM5', 9600)  # Ajusta el nombre del puerto y la velocidad

    time.sleep(2)  # Esperar 2 segundos para permitir que el puerto se abra

    while True:
        # Esperar datos desde el puerto serial
        datos = puerto_serie.read(8).decode('utf-8')  # Leer 8 bytes desde el puerto serial y decodificarlos como UTF-8

        # Dividir los datos en dos partes usando la coma como separador
        datoUID, datoEstacionamiento = datos.split(',')

        # Comparar los datos con la base de datos
        if comparar_datos(datoUID, datoEstacionamiento):
            # Guardar un registro con la fecha y hora actual en la base de datos

            fecha_hora_actual = datetime.datetime.now()
            # TODO: Implementa aquí tu lógica de guardado en la base de datos
            print(f"Registro guardado: {fecha_hora_actual}")

            # Enviar una respuesta de vuelta al puerto serial
            puerto_serie.write(b'p') # Envía datos al puerto serie

except serial.SerialException:
    print('Error al conectar con el puerto serial')
