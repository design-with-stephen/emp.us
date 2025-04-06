(function(){
    const btns = document.querySelectorAll(".modeBtn");
    const body = document.body;
    
    // Apply theme on page load
    window.onload = () => {
        const savedTheme = localStorage.getItem("theme");
        const isDark = savedTheme === 'dark';
    
        if (isDark) {
            body.classList.add("darkTheme");
        } else {
            body.classList.remove("darkTheme");
        }
    
        // Update all buttons to reflect current theme
        btns.forEach(btn => {
            btn.innerHTML = isDark
                ? '<i class="fa-solid fa-moon"></i>'
                : '<i class="fa-solid fa-sun"></i>';
        });
    };
    
    // Add event listener to each mode button
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            body.classList.toggle("darkTheme");
            const isDark = body.classList.contains("darkTheme");
    
            // Update all buttons (in case more than one exists)
            btns.forEach(b => {
                b.innerHTML = isDark
                    ? '<i class="fa-solid fa-moon"></i>'
                    : '<i class="fa-solid fa-sun"></i>';
            });
    
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    });
    
    
})();
