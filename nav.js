//Hamburger toggle

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () =>{

    const visiblity = nav.getAttribute("data-visible");
    const navExpanded = navToggle.getAttribute("aria-expanded");
    
    if((visiblity === "false") && (navExpanded ==="false")){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})