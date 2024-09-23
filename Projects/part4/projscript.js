// Project Javascript, Utkarsh Kotadiya

const toggleNav = () => {
    document.getElementById("home-nav").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
};