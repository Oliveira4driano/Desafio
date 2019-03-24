<?php


    if(isset($_GET["email"]) || isset($_GET["senha"]) ){
        if(!empty($_GET["email"]) || !empty($_GET["senha"])  ){
    
           require 'config.php';
    
            $email= $_GET["email"];
            $senha= $_GET["senha"];

	$sql = $conexao->prepare("SELECT * FROM usuario where usuemail='$email'  and ususenha='$senha'");

		$sql->execute();

            $outp = "";
            if($rs=$sql->fetch()) {
                if ($outp != "") {$outp .= ",";}
                $outp .= '{"idusuario":"'  . $rs["usucodigo"] . '",';
                $outp .= '"nome":"'   . $rs["usunome"]        . '",';
                $outp .= '"email":"'   . $rs["usuemail"]        . '",';
                $outp .= '"senha":"'   . $rs["ususenha"]        . '",';
                $outp .= '"nivel":"'   . $rs["niveusunivel"]        . '",';
                $outp .= '"foto":"'   . $rs["usufoto"]        . '",';
                $outp .= '"status":"'   . $rs["usustatus"]        . '",';
                $outp .= '"data_cadastro_user":"'. $rs["usudtcadastro"]     . '"}';

                $outp ='{"msg": {"logado": "sim", "texto": "logado com sucesso!"}, "dados": '.$outp.'}';
            }else{
            
                $outp ='{"msg": {"logado": "nao", "texto": "login ou senha invalidos!"}, "dados": {'.$outp.'}}';
                
            }
		
        echo utf8_encode($outp); 
			
    }
}

?>
