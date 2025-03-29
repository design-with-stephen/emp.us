(function () {
    "use strict";

    const dropDown_link = document.querySelector(".dropDown_Link");
    const dropDownMenu = document.querySelector(".dropDownMenu");
    const dropDown = document.querySelector(".dropDown");

    dropDown_link.addEventListener("mouseover", (e) => {
        e.preventDefault();
        dropDownMenu.classList.add("showDropDown");
    })

    dropDown.addEventListener("mouseleave", () => {
        dropDownMenu.classList.remove("showDropDown");
    })

})();

document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".statistics");

    function animateCount(stat) {
        let target = Number(stat.getAttribute("data-target"));
        let count = 0;
        let speed = target / 100; 

        let counter = setInterval(() => {
            count += Math.ceil(speed); 
            if (count >= target) {
                stat.innerText = target + "+"; 
                clearInterval(counter);
            } else {
                stat.innerText = count;
            }
        }, 30);
    }

    function startCounting(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }

    let observer = new IntersectionObserver(startCounting, {
        threshold: 0.5
    });

    stats.forEach(stat => {
        observer.observe(stat);
    });
});


// on scroll the navbar if fixed at the top of the page

const fixedNavBar = document.querySelector(".navbar");
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
    fixedNavBar.classList.add("navbarOnScroll");
    console.log("scrolled")
})
