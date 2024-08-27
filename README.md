<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

### Detalles del Proyecto
El sistema de control de estacionamiento está compuesto por dos módulos principales: una aplicación web y un sistema hardware. La aplicación web, desarrollada con Laravel y utilizando PostgreSQL como base de datos, permite gestionar los usuarios y los estacionamientos, visualizar la disponibilidad de espacios en tiempo real y consultar los registros de entrada y salida de los docentes.

Por otro lado, el sistema hardware, que incluye el Arduino Uno, tecnología RFID y otros componentes, facilita la automatización del control de entrada y salida de vehículos. Los usuarios pueden marcar su entrada y salida mediante tarjetas RFID, lo que permite mantener información actualizada sobre la disponibilidad de plazas y optimizar la administración del estacionamiento. La comunicación serial entre el Arduino y la aplicación web se realiza mediante Python.

- Credenciales del prueba:
    - Correo Electrónico: admin@admin.com
    - Contraseña: Admin123

- Componentes utilizados:
  - Arduino uno.
  - Protoboard
  - Kit lector y grabador RFID RC522.
  - Micro servomotor.
  - LCD display.
  - Cable dupont.
