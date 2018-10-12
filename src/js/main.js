function menu_function() {
    var x = document.getElementById("responsive_nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}