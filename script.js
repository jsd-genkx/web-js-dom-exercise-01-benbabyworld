
// อันนี้ผมทำแบบ addEventListener
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



// อันนี้ผมทำแบบ onClick ครับ

function hry() {
    let change = document.getElementById("texts");
    if (change.innerText === "how are you?") {
        change.innerText = "I'm good";
    } else {
        change.innerText = "how are you?";
    }
}



