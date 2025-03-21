<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configuración del correo
    $to = "info@urbanarquitectura.mx"; // Tu correo del dominio
    

    // Sanitizar y obtener los datos del formulario
    $name = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $proyecto = htmlspecialchars($_POST["proyecto"]);
    $message = htmlspecialchars($_POST["mensaje"]);

    // Crear un asunto más descriptivo y específico
    $subject = "[Formulario Web] Nuevo contacto: {$name} - Proyecto: {$proyecto}";

    // Validar que los campos no estén vacíos
    if (empty($name) || empty($email) || empty($telefono) || empty($proyecto) || empty($message)) {
        echo "Por favor complete todos los campos del formulario para poder procesar su solicitud.";
        exit;
    }

    // Crear el cuerpo del mensaje
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Has recibido un nuevo mensaje desde el formulario de contacto:\n\n";
    $body .= "Nombre: $name\n";
    $body .= "Correo: $email\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Proyecto: $proyecto\n";
    $body .= "Mensaje:\n$message\n";

    // Intentar enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Gracias por contactarnos! Su mensaje ha sido enviado correctamente. Nos pondremos en contacto con usted lo antes posible.";
    } else {
        echo "Lo sentimos, ha ocurrido un problema al enviar su mensaje. Por favor intente nuevamente o contáctenos directamente por teléfono.";
    }
} else {
    echo "Acceso denegado. Por favor utilice el formulario de contacto para enviar mensajes.";
}
?>
