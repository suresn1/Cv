function visiteur()
{	
	var num = Math.floor(Math.random()*1000);
	var text ="Tu es le visiteur n° : "+num;
	console.log(text);
	alert(text);
}

function ChangerTitre(){  
	var elem = document.getElementById("mon_header");
    if(elem.innerHTML == "Mes Dévs ! Web en SNIR")
		{
		elem.innerHTML = "Par Nethusan SURESHKUMAR"; 	 
		}
	else{
		elem.innerHTML = "Mes Dévs ! Web en SNIR";
		}
}  

function changer_theme_orange(){       //ORANGE
 console.debug("changement de couleur en orange");
 document.getElementById("ma_nav").style.border = "10px solid #730800";
 document.getElementById("ma_nav").style.backgroundColor = "#A10F04";
 document.getElementById("mon_header").style.border = "10px solid #730800";
 document.getElementById("mon_header").style.backgroundColor = "#A10F04";
 document.getElementById("mon_aside").style.border = "2px solid #730800";
 document.getElementById("mon_aside").style.backgroundColor = "	#FF6347";
 document.getElementById("mon_footer").style.border = "10px solid #730800";
 document.getElementById("mon_footer").style.backgroundColor = "#A10F04";
 document.getElementById("Info").style.border = "2px solid #730800";
 document.getElementById("Info").style.backgroundColor = "#FF6347";
 //H2 en orange
  document.getElementById("h1").style.color = "#FFFFFF";
  document.getElementById("h2").style.color = "#730800";
  document.getElementById("h2.2").style.color = "#730800";
  document.getElementById("h2.1").style.color = "#730800";
  document.getElementById("h2.3").style.color = "#730800";
  document.getElementById("h2.4").style.color = "#730800";
  document.getElementById("monbody").style.background = "url(Fond/orange.jpg)no-repeat center fixed";
}

function changer_theme_bleu(){       //BLEU 
  console.debug("changement de couleur en bleu");
  document.getElementById("ma_nav").style.border = "10px solid #1A1920";
  document.getElementById("ma_nav").style.backgroundColor = "#00B4C2";
  document.getElementById("mon_header").style.border = "10px solid #1A1920";
  document.getElementById("mon_header").style.backgroundColor = "#00B4C2";
  document.getElementById("mon_aside").style.border = "2px solid #010A4A";
  document.getElementById("mon_aside").style.backgroundColor = "	#6823E0";
  document.getElementById("mon_footer").style.border = "10px solid #1A1920";
  document.getElementById("mon_footer").style.backgroundColor = "#00B4C2";
  document.getElementById("Info").style.border = "2px solid #010A4A";
  document.getElementById("Info").style.backgroundColor = "#6823E0";
  //H2 en orange
   document.getElementById("h1").style.color = "#FFFFFF";
   document.getElementById("h2").style.color = "#09C7FF";
   document.getElementById("h2.2").style.color = "#09C7FF";
   document.getElementById("h2.1").style.color = "#09C7FF";
   document.getElementById("h2.3").style.color = "#09C7FF";
   document.getElementById("h2.4").style.color = "#09C7FF";
   document.getElementById("monbody").style.background = "url(Fond/blue.png)no-repeat center fixed";
 }
 



function changer_theme_rouge(){   //Vert
  console.debug("changement de couleur en vert");
  document.getElementById("ma_nav").style.border = "10px solid #006400";
  document.getElementById("ma_nav").style.backgroundColor = "#33FF99";
  document.getElementById("mon_header").style.border = "10px solid #006400";
  document.getElementById("mon_header").style.backgroundColor = "#33FFCC";
  document.getElementById("mon_aside").style.border = "2px solid #006400";
  document.getElementById("mon_aside").style.backgroundColor = "#108A53"
  document.getElementById("mon_footer").style.border = "10px solid #006400";
  document.getElementById("mon_footer").style.backgroundColor = "#33FF99";
  document.getElementById("Info").style.border = "2px solid #006400";
  document.getElementById("Info").style.backgroundColor = "#108A53";
  //H2 en Vert
   document.getElementById("h1").style.color = "#FFFFFF";
   document.getElementById("h2").style.color = "#66CC00";
   document.getElementById("h2.2").style.color = "#66CC00";
   document.getElementById("h2.1").style.color = "#66CC00";
   document.getElementById("h2.3").style.color = "#66CC00";
   document.getElementById("h2.4").style.color = "#66CC00";
   document.getElementById("monbody").style.background = "url(Fond/vert.jpg)no-repeat center fixed";
 }


	
//Gestion des evenements
var el = document.getElementById("mon_header");  // Titre 
el.addEventListener("mouseover", ChangerTitre);	
 

 document.getElementById("theme_orange").addEventListener("click",changer_theme_orange);  // theme
document.getElementById("theme_bleu").addEventListener("click",changer_theme_bleu);  // theme
document.getElementById("theme_rouge").addEventListener("click",changer_theme_rouge);  // theme

document.getElementById("nav_mon_cv").addEventListener("click",changerSection);
document.getElementById("nav_mon_site").addEventListener("click",changerSection);
document.getElementById("nav_inscription").addEventListener("click",changerSection);
document.getElementById("nav_connexion").addEventListener("click",changerSection);







function changerSection (){
   if (this.id == "nav_mon_cv"){
    console.debug("mon casier judiciaire ? y'a rien wesh");
    inscription.style.display ="none";
    mon_cv.style.display ="block";
    connexion.style.display ="none";
  }
  else if (this.id =="nav_inscription"){
    console.debug("tu veux t'inscrire ?okay ma gueule");
    inscription.style.display ="block";
    mon_cv.style.display ="none";
    connexion.style.display ="none";
  }
  else if (this.id =="nav_connexion"){
    console.debug("tu veux te connecter ?okay bg");
    inscription.style.display ="none";
    mon_cv.style.display ="none";
    connexion.style.display ="block";
  }

}