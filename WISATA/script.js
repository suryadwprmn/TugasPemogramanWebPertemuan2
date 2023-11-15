const tdElements = document.getElementsByTagName("td");

function changeToBrown(event) {
    event.target.style.backgroundColor = "beige";
}

function changeToWhite(event) {
    event.target.style.backgroundColor = "white";
}


for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].addEventListener("mouseenter", changeToBrown);
    tdElements[i].addEventListener("mouseleave", changeToWhite);
}