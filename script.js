/* ES6 */
"use strict"


const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeihgt = mainElement.clientHeight;

console.log (mainElementHeihgt);
const home = document.getElementById("home");

const active = document.getElementById("burger");
const nav = document.getElementById("nav");
active.onclick = function () {
    nav.classList.toggle("active");
};
home.onclick = function () {
    home.classList.add("active__nav")
};


const skrolls = document.querySelectorAll('a[href*="#"]')
console.log(skrolls);
for (let scroll of skrolls){
    scroll.addEventListener("click", function(event) {
        nav.classList.toggle("active");
        event.preventDefault();
        const blockID = scroll.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
