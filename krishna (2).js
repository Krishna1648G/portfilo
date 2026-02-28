
// Toggle Mobile Menu
function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();