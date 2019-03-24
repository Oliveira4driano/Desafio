<?php

try {
	require 'config.php';

	if(!$conexao){
		echo "Não foi possivel conectar com Banco de Dados!";
	}		

	$query = $conexao->prepare('SELECT * FROM `produto` order by idproduto asc');

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"codigo": "'.$result["procodigo"].'",';
			$out .= '"nome": "'.$result["pronome"].'",';
			$out .= '"quantidade": "'.$result["proqtd"].'",';
			$out .= '"descricao": "'.$result["prodescricao"].'",';
			$out .= '"foto": "'.$result["profoto"].'",';
			$out .= '"valor": "'.$result["provalor"].'",';
			$out .= '"status": "'.$result["prostatus"].'",';
			$out .= '"criacao": "'.$result["prodtcadastro"].'"}';
		}
		$out .= "]";
		echo utf8_encode($out);



} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
