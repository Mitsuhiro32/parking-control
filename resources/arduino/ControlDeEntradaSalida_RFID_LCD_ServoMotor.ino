#include <SPI.h>
#include <MFRC522.h>
#include <Servo.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

#define RST_PIN 9 // constante para referenciar pin de reset
#define SS_PIN 10 // constante para referenciar pin de slave select

MFRC522 mfrc522(SS_PIN, RST_PIN);   // crea objeto mfrc522 enviando pines de slave select y reset
LiquidCrystal_I2C lcd(0x27, 16, 2); // Crea una instancia del objeto LiquidCrystal_I2C con los parámetros adecuados
Servo servo1;

char opcion = ' ';
boolean esperando = false;
boolean repetir = true;
byte readCard[4];
String respuesta = "";
String tagUID = "";

void setup()
{
    Serial.begin(9600); // inicializa comunicacion por monitor serie a 9600 bps
    SPI.begin();        // Inicializa el bus
    mfrc522.PCD_Init(); // Inicializa el lector RFID
    lcd.init();         // Inicializa el LCD
    lcd.backlight();    // Enciende la luz de fondo del LCD
    servo1.attach(6);   // Asigna el pin para el Servo

    lcd.clear();                   // Limpia el LCD
    lcd.print(" Control Acceso");  // Imprime un mensaje en el LCD
    lcd.setCursor(0, 1);           // Posiciona el cursor en la segunda fila
    lcd.print("Pase su tarjeta>"); // Imprime otro mensaje en el LCD
}

void loop()
{
    servo1.write(0); // coloca el servo en la posicion cero

    while (repetir) // Mientras repetir sea true
    {
        if (Serial.available() > 0)
        {                           // si hay datos disponibles en el puerto serial
            opcion = Serial.read(); // lee el mensaje del puerto serial
            if (opcion == 'a')
            {                     // si el mensaje es igual a "a"
                esperando = true; // cambia el valor de esperando a true
                lcd.clear();
                lcd.setCursor(0, 0);
                lcd.print("Pase su tarjeta>");
            }
        }

        if (esperando)
        {                                         // Mientras esté esperando una tarjeta RFID
            if (!mfrc522.PICC_IsNewCardPresent()) // si no hay una tarjeta presente
                return;                           // retorna al loop esperando por una tarjeta

            if (!mfrc522.PICC_ReadCardSerial()) // si no puede obtener datos de la tarjeta
                return;                         // retorna al loop esperando por otra tarjeta
                                                // muestra texto UID:
            for (byte i = 0; i < mfrc522.uid.size; i++)
            { // bucle recorre de a un byte por vez el UID
                tagUID.concat(String(mfrc522.uid.uidByte[i], HEX));
                if (mfrc522.uid.uidByte[i] < 0x10)
                {                      // si el byte leido es menor a 0x10
                    Serial.print("0"); // imprime espacio en blanco y numero cero
                }
                Serial.print(mfrc522.uid.uidByte[i], HEX); // imprime el byte del UID leido en hexadecimal
            } // nueva linea

            tagUID.toUpperCase(); // Convierte la cadena a mayúsculas
            mfrc522.PICC_HaltA(); // detiene comunicacion con tarjeta
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print(" UID : "); // Imprime un texto en el LCD
            lcd.print(tagUID);    // Imprime el ID de la tarjeta en el LCD
            delay(2000);
            lcd.clear();                   // Limpia el LCD
            lcd.print(" Control Acceso");  // Imprime un mensaje en el LCD
            lcd.setCursor(0, 1);           // Posiciona el cursor en la segunda fila
            lcd.print("Pase su tarjeta>"); // Imprime otro mensaje en el LCD
            esperando = false;             // cambia el valor de esperando a false
        }

        if (getID())
        {
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print("Validando datos");
            esperando = true;

            while (esperando)
            {
                respuesta = "";
                if (Serial.available() > 0)
                {                                    // si hay datos disponibles en el puerto serial
                    respuesta = Serial.readString(); // lee el mensaje del puerto serial
                    respuesta.trim();

                    if (respuesta == "Acceso Permitido" || respuesta == "Hasta Pronto....")
                    {
                        lcd.clear();
                        lcd.setCursor(0, 0);
                        lcd.print(respuesta);          // Imprime un mensaje en el LCD
                        servo1.write(90);              // Gira el servo a 90 grados
                        lcd.setCursor(0, 1);           // Posiciona el cursor en la segunda fila
                        lcd.print(" UID : ");          // Imprime un texto en el LCD
                        lcd.print(tagUID);             // Imprime el ID de la tarjeta en el LCD
                        delay(2500);                   // Esperar
                        servo1.write(0);               // coloca el servo en la posicion cero
                        lcd.clear();                   // Limpia el LCD
                        lcd.print(" Control Acceso");  // Imprime un mensaje en el LCD
                        lcd.setCursor(0, 1);           // Posiciona el cursor en la segunda fila
                        lcd.print("Pase su tarjeta>"); // Imprime otro mensaje en el LCD
                        esperando = false;
                    }
                    else
                    {
                        lcd.clear();
                        lcd.setCursor(0, 0);
                        lcd.print("Acceso Denegado"); // Imprime un mensaje en el LCD
                        lcd.setCursor(0, 1);
                        lcd.print(respuesta);
                        delay(2500);                   // Esperar
                        lcd.clear();                   // Limpia el LCD
                        lcd.print(" Control Acceso");  // Imprime un mensaje en el LCD
                        lcd.setCursor(0, 1);           // Posiciona el cursor en la segunda fila
                        lcd.print("Pase su tarjeta>"); // Imprime otro mensaje en el LCD
                        esperando = false;
                    }
                }
            }
        }
    }
}

// Lee el ID de una nueva tarjeta si está disponible
boolean getID()
{
    // Se prepara para leer las tarjetas RFID
    if (!mfrc522.PICC_IsNewCardPresent())
    { // Si no hay una nueva tarjeta en el lector, continúa
        return false;
    }
    if (!mfrc522.PICC_ReadCardSerial())
    { // Si se lee el serial de una tarjeta, continúa
        return false;
    }

    tagUID = "";

    for (byte i = 0; i < mfrc522.uid.size; i++)
    { // bucle recorre de a un byte por vez el UID
        tagUID.concat(String(mfrc522.uid.uidByte[i], HEX));
        if (mfrc522.uid.uidByte[i] < 0x10)
        {                      // si el byte leido es menor a 0x10
            Serial.print("0"); // imprime espacio en blanco y numero cero
        }
        Serial.print(mfrc522.uid.uidByte[i], HEX); // imprime el byte del UID leido en hexadecimal
    }
    Serial.print(","); // imprime una coma
    Serial.print("UNAE\n");

    tagUID.toUpperCase(); // Convierte la cadena a mayúsculas
    mfrc522.PICC_HaltA(); // Detiene la lectura
    return true;          // Retorna verdadero si se leyó una tarjeta
}
