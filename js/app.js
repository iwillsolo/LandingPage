/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let SectS = document.querySelectorAll('section');
let UnList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function UnListCreation() {
    SectS.forEach((element, index, array) => {
        SectionName = element.getAttribute("data-nav");
        SectionLink = element.getAttribute('id');
        Listcreation = document.createElement('li');
        UnList.appendChild(Listcreation);
        Listcreation.innerHTML = `<a class = 'menu__link' href='#${SectionLink}'>${SectionName}</a>`;

    });

}
/*

*/

// Check active class and add class your-active-class to section in ViewPort
function inViewPort() {
    for (section of SectS) {
        var bounding = section.getBoundingClientRect();
        if (bounding.top >= 0 && !section.classList.contains('your-active-class')) {
            section.classList.add('your-active-class');
        }
        else if (bounding.top <= 0 && section.classList.contains('your-active-class')) {
            section.classList.remove('your-active-class');
        }
    }
}

// build the nav
UnListCreation();
// Set sections as active when scrolling 
addEventListener('scroll', inViewPort);