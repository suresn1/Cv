<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

        if (isset($_POST['inscription'])){
            foreach($_POST as $key=>$values){
                $$key = $values;
            }
        $bdd = new mysqli("172.20.21.202","snirlla","snirlla","base_nethusan");
        $req = "Insert into utilisateur(nom, prenom, pseudo, email, mdp, naissance) values ('$nom_utilisateur', '$prenom_utilisateur', '$pseudo_utilisateur', '$mail_utilisateur', '$mdp_utilisateur', '$date_utilisateur')";
        $res=$bdd->query($req);
        if($res->num_rows == 0){
        echo " Erreur lors de l'inscription";
      header('Location:index.html?erreur=PseudoInscription');
        }
        else {
      print_r($res);
     header('Location:index.html');
    }

}

?>

<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
if (isset($_POST['validForm'])){
    $pseudo=$_POST['pseudo_utilisateur'];
    $mysqli = new mysqli("172.20.21.202","snirlla","snirlla","base_nethusan");
    $req = "select nom,prenom from utilisateur where pseudo='$pseudo'";
    $mdp=$_POST['mdp_utilisateur'];
    $res=$mysqli->query($req);
    $rep=$res->fetch_assoc();
    if($res->num_rows == 0){
        echo "Erreur d'authentification";
       header('Location:index.html?erreur=PseudoConnexion');
        $_GET['erreur'];
    } 

    else {
        print_r($rep);
        header('Location:index.html');
    }


}
?>