document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            const script = document.createElement("script");
            script.src = "../scripts/mobileSideBar.js";
            script.defer = true;
            document.body.appendChild(script);

            const darkModeScript = document.createElement("script");
            darkModeScript.src = "../scripts/darkmode.js";
            darkModeScript.defer = true;
            document.body.append(darkModeScript);
        })
        .catch(error => console.error("Error loading navbar:", error));
});