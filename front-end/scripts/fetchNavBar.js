document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Now that the navbar is loaded, load the sidebar script
            const script = document.createElement("script");
            script.src = "../scripts/mobileSideBar.js";
            script.defer = true;
            document.body.appendChild(script);
        })
        .catch(error => console.error("Error loading navbar:", error));
});