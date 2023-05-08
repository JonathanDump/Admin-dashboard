const sidebar = document.querySelector(".sidebar");
let width = window.matchMedia("(max-width: 886px)");
const bgGray = document.querySelector(".bg-gray");
const container = document.querySelector(".container");
const sidebarButtons = document.querySelectorAll(".sidebar__btn");
const body = document.querySelector("body");
let dashboard = getDashboard(width);
width.addListener(getDashboard);


if (width.matches) {
    sidebar.classList.add("sidebar__invisible");

    dashboard.addEventListener("click", showSidebar);

    bgGray.addEventListener("click", hideSidebar);

    sidebarButtons.forEach((button) => {
        button.addEventListener("click", hideSidebar);
    });
}


function getDashboard(width) {
    if (width.matches) {
        let dash = document.querySelector(".dashboard");
        console.log(dash)
        return dash;
    } else {
        sidebar.classList.remove("sidebar__invisible");
    }
}


function hideSidebar() {
    bgGray.classList.remove("bg-gray__active");
    sidebar.classList.remove("sidebar__visible");
    sidebar.classList.add("sidebar__invisible");
    container.classList.remove("scroll-lock"); 
}

function showSidebar(){
    sidebar.classList.remove("sidebar__invisible");
    sidebar.classList.add("sidebar__visible");
    bgGray.classList.add("bg-gray__active");
    container.classList.add("scroll-lock");
}
