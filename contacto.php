<?php

$nombre = $_POST["nombre"];
echo $nombre;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Formulario</h1>
    <form method="POST">
    <input name="nombre">
    <button type="submit">Enviar</button>
    </form>
</body>
</html>