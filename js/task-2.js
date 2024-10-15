function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
}

// Тести для перевірки коректності роботи функції
const results = [
    makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3), // ["Mango", "Poly", "Ajax"]
    makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4), // ["Mango", "Poly", "Houston", "Ajax"]
    makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3), // ["Mango", "Ajax", "Chelsea"]
    makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2), // ["Earth", "Jupiter"]
    makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4), // ["Earth", "Jupiter", "Neptune", "Uranus"]
    makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) // []
];

// Виведення результатів на веб-сторінку
const outputDiv = document.getElementById("output");
results.forEach((result, index) => {
    outputDiv.innerHTML += `<p>Результат ${index + 1}: [${result.join(", ")}]</p>`;
});
