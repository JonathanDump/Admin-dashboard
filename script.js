const sidebar = document.querySelector(".sidebar")
let width = window.matchMedia("(max-width: 886px)");
console.log(width);
let dashboard = getDashboard(width);
width.addListener(getDashboard);


if (width.matches) {
dashboard.addEventListener("click", () => {
    sidebar.classList.add("sidebar__visible");
});
}


function getDashboard(width) {
    if (width.matches) {
        let dash = document.querySelector(".dashboard");
        console.log(dash)
        return dash;
    } else {
        console.log("notMatch")
        return;
    }
}



