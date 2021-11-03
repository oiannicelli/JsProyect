$(document).ready(function() {

    // cuando se envie el formulario ejecutar la funcion
    $(".formulario-contacto").bind("submit", function() {

        $.axaj({
            type:$(this).attr("method"),
            url:'/php/enviar.php',

            // se envian todos los datos juntos
            data:$(this).serialize(),

            // mostrar el mensaje de enviado
            success:function(respuesta){
                if (respuesta == "ok"){
                    $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").addClass("alert-success");
                    $(".respuesta").html("Enviado!");
                    $(".mensaje-alerta").html("El formulario se envio correctamente");
                } else {
                    $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").addClass("alert-danger");
                    $(".respuesta").html("Error al enviar!");
                    $(".mensaje-alerta").html("No se pudo enviar tu solicitud, intenta nuevamente");
                }
            },

            // mostrar el mensaje de error
            error:function(){
                $("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").addClass("alert-danger");
                $(".respuesta").html("Error al enviar!");
                $(".mensaje-alerta").html("No se pudo enviar tu solicitud, intenta nuevamente");                
            },
        })
        // cancela el evento submit
        return false;
    });

});