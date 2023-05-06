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

function membersDrop() {
    let dropDown = document.querySelector("div.dropdown_members");
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
    } // if
    else {
        /* If current display is >= 950, dropdown menus for horizontal nav */
        if (window.innerWidth >= 950) {
            dropDown.style.display = "block";
            /* Keep dropdown in front of header */
            dropDown.style.position = "absolute";
            /* Add box shadow */
            dropDown.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39)";
            /* Add space between nav link and dropdown box */
            dropDown.style.marginTop = "25px";
            /* Keep width of dropdown menus from exceeding corresponding parent nav link */
            dropDown.style.maxWidth = "125px";
        } // if >= 900
        else {
            /* Hamburger menu */
            dropDown.style.display = "block";
        } // < 900
    } // else
} // membersDrop()

function projectsDrop() {
    let dropDown = document.querySelector("div.dropdown_projects");
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
    } // if
    else {
        /* If current display is >= 950, dropdown menus for horizontal nav */
        if (window.innerWidth >= 950) {
            dropDown.style.display = "block";
            /* Keep dropdown in front of header */
            dropDown.style.position = "absolute";
            /* Add box shadow */
            dropDown.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39)";
            /* Add space between nav link and dropdown box */
            dropDown.style.marginTop = "25px";
            /* Keep width of dropdown menus from exceeding corresponding parent nav link */
            dropDown.style.maxWidth = "125px";
        } // if >= 900
        else {
            /* Hamburger menu */
            dropDown.style.display = "block";
        } // < 900
    } // else
} // projectsDrop()

// When the screen hits the media breakpoint at the value screenSize,
// update the navigation links to be displayed (previously display none for mobile views) & hide any open dropdown menus
const largerQuery = window.matchMedia("(min-width: 950px)");

largerQuery.onchange = (e) => {
    if (e.matches) {
        // Show navigation links
        let navList = document.getElementById("navigation");
        navList.style.display = "block";

        // Hide dropdown menus
        let dropMembers = document.getElementById("memberDrop");
        dropMembers.style.display = "none";
        let dropProjects = document.getElementById("projectDrop");
        dropProjects.style.display = "none";
    } // if
}

const mobileQuery = window.matchMedia("(max-width: 949px)");

mobileQuery.onchange = (e) => {
    // When navigation changes to hamburger menu, set display of dropdown menus and navigation list to none so that open navigation does not stay open */
    if (e.matches) {
        let navList = document.getElementById("navigation");
        navList.style.display = "none";
        let dropMembers = document.getElementById("memberDrop");
        dropMembers.style.display = "none";
        let dropProjects = document.getElementById("projectDrop");
        dropProjects.style.display = "none";
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