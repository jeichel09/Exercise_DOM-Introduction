function toggle() {
    let myBlock = document.getElementsByClassName("button")[0];
    let myContent = document.getElementById('extra');

    if (myBlock.textContent === "More") {
        myContent.style.display = 'block';
        myBlock.textContent = "Less";
    } else if (myBlock.textContent === "Less") {
        myContent.style.display = 'none';
        myBlock.textContent = "More";
    }
}

