/* 
	filename: translate.js
*/

let lang = "en";
language(lang);

function language(n) {
	let show = n;
    let hide = "";
	
	if (n == "en") {
		hide = "zh";
		
	} else if (n == "zh") {
		hide = "en";
	}
  
  	// hide contents
	let hideContents = document.getElementsByClassName("lang"+hide);
	for (j = 0; j < hideContents.length; j++) {
		hideContents[j].style.display = "none";
	} 
	
	// display contents
	let displayContents = document.getElementsByClassName("lang"+show);
	for (i = 0; i < displayContents.length; i++) {
		displayContents[i].style.display = "block";
	}
    
    // change menu id
    let hideMenu = document.getElementById("menu"+hide);
    // avoid change id when multiple click the same language
    if (hideMenu == null) {
        let showMenu = document.getElementById("menu"+show);
        hideMenu = document.getElementById("menu");
        hideMenu.id = "menu" + hide;
        showMenu.id = "menu";
    }
	
	// change buttons colour to show the current language
	let hidebtn = document.getElementById("btn"+hide);
	hidebtn.className = hidebtn.className.replace(" active", "");
	let showbtn = document.getElementById("btn"+show);
    showbtn.className += " active";
}
