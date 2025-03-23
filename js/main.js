/* DT200G - Grafisk teknik för webb
 * Moment 2
 * Linn Eriksson, HT2024
 */

"use strict;"

//Get elements
const openMenuButton = document.getElementById("openmenu");
const closeMenuButton = document.getElementById("closemenu");
const menuDiv = document.getElementById("menu");

//Run init-function
window.onload = init();

//Init-funktion
function init() {
    //Add eventlisteners
    openMenuButton.addEventListener("click", openMenu);
    closeMenuButton.addEventListener("click", closeMenu);
}

//Open menu by displaying div
function openMenu(event) {
    event.preventDefault();
    
    //Hide open-button
    openMenuButton.style.display = "none";

    //Display other stuff
    menuDiv.style.display = "block";


}

//Close menu by hiding div
function closeMenu(event) {
    event.preventDefault();

    //Close menu by not displaying stuff
    menuDiv.style.display = "none";

    //Show open-button
    openMenuButton.style.display = "block";
}