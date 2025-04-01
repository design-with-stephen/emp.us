document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = document.querySelectorAll(".blogPost");
    const seeMoreBtn = document.querySelector(".discoverMoreBtn");
    
    let postsToShow = 3;
    let expanded = false;
    
    function updatePostsDisplay() {
        blogPosts.forEach((post, index) => {
            if (index < postsToShow) {
                post.style.display = "flex";
            } else {
                post.style.display = "none";
            }
        });
        seeMoreBtn.innerText = expanded ? "Show Less" : "Discover More";
    }
    
    updatePostsDisplay();
    
    seeMoreBtn.addEventListener("click", function () {
        if (expanded) {
            postsToShow = 3;
        } else {
            postsToShow = blogPosts.length;
        }
        expanded = !expanded;
        updatePostsDisplay();
    });
});
