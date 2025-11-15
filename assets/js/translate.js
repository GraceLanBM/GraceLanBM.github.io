/* 
	filename: translate.js
*/

let lang = "en";
language(lang);

function language(n) {
	var show = "lang " + n;
	var hide = "lang ";
	var showid = "btn " + n;
	var hideid = "btn ";
	
	if (n == "en") {
		hide += "zh";
		hideid += "zh";
		
	} else if (n == "zh") {
		hide += "en";
		hideid += "en";
	}
  
  	// hide contents
	var hideContents = document.getElementsByClassName(hide);
	for (j = 0; j < hideContents.length; j++) {
		hideContents[j].style.display = "none";
	} 
	
	// display contents
	var displayContents = document.getElementsByClassName(show);
	for (i = 0; i < displayContents.length; i++) {
		displayContents[i].style.display = "block";
	}
	
	// deactive button
	var hidebtn = document.getElementById(hideid);
	hidebtn.className = hidebtn.className.replace(" active", "");
	var showbtn = document.getElementById(showid);
	showbtn.className += " active";

}
