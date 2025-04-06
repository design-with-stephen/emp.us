(function () {
    const sidebar = document.querySelector(".mobileNavBar");
    const overlay = document.getElementById("overlay");
    const hamburger = document.querySelector(".hamburger");

    const closeBtn = document.querySelector(".close-icon")
    const body = document.body;
    hamburger.addEventListener("click", () => {
        sidebar.classList.add("sideBarToggled");
        body.classList.add("no-scroll");
        overlay.classList.toggle("show");
    })
    closeBtn.addEventListener("click", () => {
        if (sidebar.classList.contains("sideBarToggled")) {
            sidebar.classList.remove("sideBarToggled");
            body.classList.remove("no-scroll");
            overlay.classList.remove("show");
        }
    })

})();

(function () {
    "use strict";

    const dropDown_link = document.querySelector(".mobile-dropDown_Link");
    const dropDownMenu = document.querySelector(".mobile-dropDownMenu");
    const dropDown = document.querySelector(".mobile-dropDown");

    dropDown_link.addEventListener("click", (e) => {
        e.preventDefault();
        dropDownMenu.classList.toggle("isActive");
    })

    dropDown.addEventListener("mouseleave", () => {
        dropDownMenu.classList.remove("isActive");
    })

})();


const fixedNavBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        fixedNavBar.classList.add("navbarOnScroll");
    } else {
        fixedNavBar.classList.remove("navbarOnScroll");
    }
});
