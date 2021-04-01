<form action="rest.php" method="get">
<input type="text" name="pseudo"/>
<input type="submit" name="validForm"/>
</form>
<?php 
if (isset($_GET['validForm']))
{ 
    $pseudo=$_GET['pseudo'];
    echo "le pseudo vaut ".$pseudo; 
}
?>