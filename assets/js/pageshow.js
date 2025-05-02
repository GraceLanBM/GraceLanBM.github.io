/* 
	filename: pageshow.js
	reference: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

let pageIndex = 1;
showPages(pageIndex);

// Next & previous controls
function plusPage(n) {
	showPages(pageIndex += n);
}

// Page controls
function currentPage(n) {
    showPages(pageIndex = n);
}

function showPages(n) {
    let i;
    let pages = document.getElementsByClassName("myPages");
    let pageNumbers = document.getElementsByClassName("page");
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");
    if (n == pages.length) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
    if (n == 1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    for (i = 0; i < pageNumbers.length; i++) {
        pageNumbers[i].className = pageNumbers[i].className.replace(" active", "");
    }
    pages[pageIndex-1].style.display = "block";
    pageNumbers[pageIndex-1].className += " active";
}
