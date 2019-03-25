<?php
/*header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=mysql995.umbler.com;dbname=eba";
$usuario = "oi";
$senha = "ola";*/



header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=192.185.208.144;dbname=ident184_bd_catalogo";
$usuario = "ident184_dba";
$senha = "ovonel";


$conexao = new PDO($host, $usuario, $senha);

?>