(function(){
    const btn = document.querySelector(".modeBtn");
    const body = document.body;

    window.onload = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === 'dark') {
            body.classList.add("darkTheme");
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>'; 
        } else {
            body.classList.remove("darkTheme");
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>'; 
        }
    }

    btn.addEventListener("click", updateTheme);

    function updateTheme() {
        body.classList.toggle("darkTheme");
        const isDark = body.classList.contains("darkTheme");

        if (isDark) {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem("theme", "light");
        }
    }
})();
