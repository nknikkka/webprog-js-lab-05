function filterArray(numbers, value) {
    const filteredNumbers = []; 

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            filteredNumbers.push(numbers[i]);}}
    return filteredNumbers;
}

const filterResults = [
    filterArray([1, 2, 3, 4, 5], 3),
    filterArray([1, 2, 3, 4, 5], 4),
    filterArray([1, 2, 3, 4, 5], 5),
    filterArray([12, 24, 8, 41, 76], 38),
    filterArray([12, 24, 8, 41, 76], 20)];

const outputDiv = document.getElementById("output");
filterResults.forEach((result, index) => {
    outputDiv.innerHTML += `<p>Результат FilterArray ${index + 1}: [${result.join(", ")}]</p>`;
});
