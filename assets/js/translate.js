/* 
    filename: translate.js
*/

let lang = "";
// change language by url
if (window.location.hash) {
    if (window.location.hash == "#en") {
        lang = "en";
    } else if (window.location.hash == "#zh") {
        lang = "zh";
    }
// get default language setting
} else {
    lang = "en";
}
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
    
    // change buttons colour to show the current language
    let hidebtn = document.getElementById("btn"+hide);
    hidebtn.classList.remove("active");
    let showbtn = document.getElementById("btn"+show);
    showbtn.classList.add("active");
    
    // change url
    let newhash = "#" + show;
    let oldhash = "#" + hide;
    let url = window.location.href;
    
    if (window.location.hash) {
        if (window.location.hash != newhash) {
            url = url.replace(oldhash, newhash);
        }
    } else {
        url += newhash;
    }
    console.log("final url=", url);
    window.location.replace(url);

}
