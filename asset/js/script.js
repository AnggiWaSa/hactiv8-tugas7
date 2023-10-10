function showMenu() {
    let menu = document.getElementById("menu");
    let box = document.getElementById("box-profile");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        box.style.paddingTop = "0px";
    } else {
        menu.style.display = "block";
        box.style.paddingTop = "125px";
    }
}