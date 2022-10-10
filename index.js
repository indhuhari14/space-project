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

//Tablist

const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const articles = document.querySelectorAll(".destination-info");

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
    tab.addEventListener('click', ChangeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if((e.keyCode === keydownLeft) || (e.keyCode == keydownRight)) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        if(e.keyCode === keydownRight) {
            tabFocus++;
            if(tabFocus >= tabs.length){
                tabFocus = 0;
            }
        }else {
            tabFocus--;
            if(tabFocus < 0){
                tabFocus = tabs.length - 1;
            }
        }
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }    
}

function ChangeTabPanel(e){
    const  targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
    targetTab.setAttribute("aria-selected", true);
    
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImage}`])
}
function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
     parent.querySelector(content).removeAttribute('hidden');
}