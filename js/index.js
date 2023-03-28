function showNav() {
    // If we click hamburger icon, check display of the navigation
    let nav = document.getElementById("navigation");

    // If nav has display block, then hide it by changing to none
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } // if
    // Otherwise, want to make the nav appear
    else {
        nav.style.display = "block";
    } // else

} // showNav()

function aboutDrop() {
    let dropDown = document.querySelector("div.dropdown_about");
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
    } // if
    else {
        dropDown.style.display = "block";
    } // else
}

function membersDrop() {
    let dropDown = document.querySelector("div.dropdown_members");
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
    } // if
    else {
        dropDown.style.display = "block";
    } // else
}

function projectsDrop() {
    let dropDown = document.querySelector("div.dropdown_projects");
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
    } // if
    else {
        dropDown.style.display = "block";
    } // else
}