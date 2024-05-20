
function newText() {
    let changetext = document.getElementById("text");
    if (changetext.innerText === "Hello JS DOM") {
        changetext.innerText = "Hello World";
    } else {
        changetext.innerText = "Hello JS DOM";
    }
}

const btn = document.getElementById('btn-click');
btn.addEventListener('click', newText);



