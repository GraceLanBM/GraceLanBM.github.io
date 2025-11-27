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
    let pageDiv = document.getElementById("pagination");
    let pageNumbers = pageDiv.getElementsByClassName("page");
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");
 
    // change next and prev button status when n is the first or last page
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
    
    // hide pages & deactive page numbers buttons
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    for (i = 0; i < pageNumbers.length; i++) {
        pageNumbers[i].classList.remove("active");
    }
    
    // show the page & change page number button to active
    pages[pageIndex-1].style.display = "block";
    pageNumbers[pageIndex-1].classList.add("active");
}
