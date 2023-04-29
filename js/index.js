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

// When the screen hits the media breakpoint at the value screenSize,
// update the navigation links to be displayed (previously display none for mobile views)
const largerQuery = window.matchMedia("(min-width: 700px)");

largerQuery.onchange = (e) => {
    if (e.matches) {
        let navList = document.getElementById("navigation");
        navList.style.display = "block";
    }
}

const mobileQuery = window.matchMedia("(max-width: 699px)");

mobileQuery.onchange = (e) => {
    if (e.matches) {
        let navList = document.getElementById("navigation");
        navList.style.display = "none";
    }
}

// function updateNavLargerScreens(screenSize) {
//     if (screenSize.matches) {
//         let nav = document.getElementById("navigation");
//         console.log("Hi")
//     }
// }
// let screenSize = window.matchMedia("(min-width: 640px)")
// updateNavLargerScreens(screenSize)
// screenSize.addEventListener(updateNavLargerScreens)