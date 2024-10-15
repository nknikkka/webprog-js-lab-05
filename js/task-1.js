function slugify(title) {
    return title
        .toLowerCase()   
        .split(' ')       
        .join('-');       
}

function displayResult(text) {
    const outputDiv = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = text;
    outputDiv.appendChild(p);
}

displayResult(slugify("Arrays for beginners"));
displayResult(slugify("English for developer"));
displayResult(slugify("Ten secrets of JavaScript"));
displayResult(slugify("How to become a JUNIOR developer in TWO WEEKS"));
