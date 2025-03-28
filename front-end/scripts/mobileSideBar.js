const sidebar = document.querySelector(".mobileNavBar");

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("sideBarToggled");
})
