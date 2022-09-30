// TODOs

// Active navbar onclick
// Showw/hide password

var buttons = document.querySelectorAll(".filter-button");
var newButton = document.getElementById("#new");
var mostPopularButton = document.getElementById("#most-popular");

newButton.addEventListener("click", changeDisplay);
const removeClass = () => {
    buttons.classList.remove("active");
}


const changeDisplay = () => {
    buttons.forEach(removeClass);
    newButton.classList.add("active")
}
