# 🤖 Flujo de Automatización para WhatsApp (Promovemos Seguros)

Este script está diseñado para implementarse en herramientas como **ManyChat** (si usas la API oficial) o **AutoResponder para WA** (más económico para Android). El objetivo principal es filtrar a los clientes, pedirles la placa y transferir al humano solo cuando el lead esté calificado (ahorrando horas de trabajo).

---

## 🟢 MENSAJE 1: BIENVENIDA (Disparador: Cualquier mensaje nuevo)
**[Condición]**: Cuando un usuario escribe por primera vez o reacciona a un anuncio.
**[Tiempo de retardo]**: 3 a 5 segundos (parece más humano).

**[Mensaje del Bot]**:
> "¡Hola! 👋 Bienvenido a *Promovemos Seguros*, tu asesor de confianza en Cúcuta y Norte de Santander. 🛡️
>
> Para brindarte una atención rápida y darte opciones reales sin hacerte perder el tiempo, ¿en qué podemos ayudarte hoy? (Responde con el número 👇)
> 
> *1️⃣.* Cotizar o Renovar mi SOAT (Rápido y 100% legal)
> *2️⃣.* Cotizar Seguro Todo Riesgo para mi Vehículo 🚗
> *3️⃣.* Seguros para mi Empresa o Negocio 🏢
> *4️⃣.* Reportar un siniestro / Necesito asistencia urgente 🚨
> *5️⃣.* Otra consulta con un asesor."

---

## 🔵 MENSAJE 2: RESPUESTA A LA OPCIÓN 1 (SOAT)
**[Condición]**: El usuario responde "1", "soat" o "uno".

**[Mensaje del Bot]**:
> "¡Perfecto! Emitir tu SOAT con nosotros es 100% seguro (evitas los fraudes de internet y respondemos con nuestra empresa local). 📄✅
> 
> Para darte el valor exacto del RUNT en menos de 2 minutos, por favor envíanos:
> *A)* La placa completa de tu vehículo.
> *B)* Tu nombre.
>
> *(En un momento uno de nuestros asesores revisará tu placa y te enviará el valor y el link de pago seguro).* 👇"

---

## 🔵 MENSAJE 3: RESPUESTA A LA OPCIÓN 2 (Seguro Todo Riesgo)
**[Condición]**: El usuario responde "2", "vehiculo", "carro" o "dos".

**[Mensaje del Bot]**:
> "¡Excelente decisión! 🚘 Cotizamos tu vehículo con más de 10 aseguradoras (Sura, Bolívar, Allianz, Mapfre, etc.) para conseguirte el mejor precio y cobertura en Cúcuta.
> 
> Solo necesitamos dos datos básicos para empezar a bucar opciones:
> *1.* Placa del vehículo.
> *2.* Tu Nombre y Apellido.
>
> Envíanos esos datos y en un momento un experto de Promovemos te dará varias opciones para que elijas la que mejor se adapte a tu bolsillo. 👇"

---

## 🔵 MENSAJE 4: RESPUESTA A LA OPCIÓN 3 (Empresas)
**[Condición]**: El usuario responde "3", "empresa", "negocio" o "tres".

**[Mensaje del Bot]**:
> "Hola. Proteger el patrimonio de tu empresa es vital. 🏢🔒 Manejamos seguros de Propiedad, Responsabilidad Civil y Copropiedades.
> 
> Por favor, déjanos:
> *1.* El nombre de tu empresa o negocio.
> *2.* ¿Qué tipo de seguro estás buscando?
>
> *(En 5 minutos, nuestro especialista comercial te escribirá por aquí para darte una asesoría gratuita).* 👇"

---

## 🔴 MENSAJE 5: RESPUESTA A LA OPCIÓN 4 (SINIESTRO - ALTA PRIORIDAD)
**[Condición]**: El usuario responde "4", "siniestro", "choque" o "accidente".

**[Mensaje del Bot]**:
> "🚨 ¡Entendido! Estamos aquí para apoyarte. 
> 
> Por favor:
> *1.* Asegúrate de que tú y los tuyos estén a salvo.
> *2.* *NO muevas los vehículos* si no hay una autoridad de tránsito que lo haya indicado.
> *3.* Escribe tu Nombre y Placa para identificar tu póliza rápidamente.
> 
> ⚠️ *(He notificado a tu asesor asignado con alerta roja, te responderemos en el próximo minuto para guiarte).*
> 
> Si la aseguradora es SURA marca al #888, si es Bolívar marca al #322 *" (Nota: Cambiar estos números por los directorios reales).

---

## ✨ NOTAS PARA EL CIERRE DE VENTA (Uso del Asesor Humano)
Una vez que el usuario da la placa y el nombre, el asesor humano desactiva el bot temporalmente para ese chat y escribe:

> *"Hola [Nombre], soy [Nombre del Asesor] de Promovemos Seguros. Ya estoy validando tu placa [Placa]. Regálame 2 minutos y te envío las mejores opciones que el sistema me arroje."*

**Mensaje de seguimiento (Si no compra el mismo día):**
> *"Hola [Nombre], pasaba a dejarte este mensaje para recordarte que la promoción que te encontré para el seguro de la placa [Placa] sigue válida hasta el viernes. ¿Te gustaría que te ayude a expedirla de una vez para que no te suba el precio? Quedo atento/a."*
