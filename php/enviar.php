<?php

function validar_campo($campo)
{
    $campo = trim($campo);
    $campo = stripcslashes($campo);
    $campo = htmlspecialchars($campo);

    return $campo;
}
header('Content-type: application/json');

if (isset($_POST["txtNombre"]) && !empty($_POST["txtNombre"]) &&
    isset($_POST["txtEmail"]) && !empty($_POST["txtEmail"]) &&
    isset($_POST["txtIdea"]) && !empty($_POST["txtIdea"]) &&
    isset($_POST["txtLugar"]) && !empty($_POST["txtLugar"]) &&
    isset($_POST["txtTamaño"]) && !empty($_POST["txtTamaño"]) &&
    isset($_POST["txtColor"]) && !empty($_POST["txtColor"]) &&
    isset($_POST["txtArtista"]) && !empty($_POST["txtArtista"]))
    
    {

    $destinoMail = "oiannicelli@gmail.com";

    $txtNombre = validar_campo($_POST["txtNombre"]);
    $txtEmail = validar_campo($_POST["txtEmail"]);
    $txtIdea = validar_campo($_POST["txtIdea"]);
    $txtLugar = validar_campo($_POST["txtLugar"]);
    $txtTamaño = validar_campo($_POST["txtTamaño"]);
    $txtColor = validar_campo($_POST["txtColor"]);
    $txtArtista = validar_campo($_POST["txtArtista"]);

    $contenido = "Nombre: " . $txtNombre . "\n E-mail: " . $txtEmail . "Idea: " . $txtIdea . "Lugar: " . $txtLugar . "\n Tamaño: " . $txtTamaño . "Color: " . $txtColor . "\n Artista: " . $txtArtista;

    mail($destinoMail, "Pedido de presupuesto" . $txtNombre, $contenido);

    return print(json_encode('ok'));
}

return print(json_encode('no'));