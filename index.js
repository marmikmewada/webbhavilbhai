const burgers = document.getElementsByClassName("hamburger");
const crosses = document.getElementsByClassName("cross");
const menuItems = document.getElementsByClassName("small-menu-list");

// Loop through all elements with class "hamburger" and add click event listeners
for (const burger of burgers) {
    burger.addEventListener("click", () => {
        burger.setAttribute("id", "hidden");
        for (const menuItem of menuItems) {
            menuItem.removeAttribute("id");
        }
        crosses[0].removeAttribute("id");
    });
}

// Loop through all elements with class "cross" and add click event listeners
for (const cross of crosses) {
    cross.addEventListener("click", () => {
        cross.setAttribute("id", "hidden");
        for (const menuItem of menuItems) {
            menuItem.setAttribute("id", "hidden");
        }
        burgers[0].removeAttribute("id");
    });
}
