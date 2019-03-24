<?php
    require 'config.php';

    if(isset($_GET["procodigo"]) ){
        if(!empty($_GET["procodigo"])){
    
            $conexao = new PDO($host, $usuario, $senha);
    
            $idproduto= $_GET["procodigo"];

	$sql = $conexao->prepare("SELECT * FROM produto where procodigo='$idproduto'");

		$sql->execute();

            $outp = "";
            if($rs=$sql->fetch()) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"idproduto":"'  . $rs["procodigo"] . '",';
                $outp .= '"nome":"'   . $rs["pronome"]        . '",';
                $outp .= '"quantidade":"'   . $rs["proqtd"]        . '",';
                $outp .= '"valor":"'   . $rs["provalor"]        . '",';
                $outp .= '"status":"'   . $rs["prostatus"]        . '",';
                $outp .= '"data_cadastro_user":"'. $rs["prodtcadastro"]     . '"}';

               
            }else{
            
               
                
            }
		
        echo utf8_encode($outp); 
			
    }
}

?>
