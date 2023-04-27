// function extractText() {
//     let elements = document.querySelectorAll("ul#items li");
//     let text = "";
//     for (let iterator of elements) {
//         text += iterator.textContent + "\n";
//     }
//     document.getElementById("result").value = text;
// }

function extractText() {
    const liElements = Array.from(document.querySelectorAll("#items > li"));
    const result = document.getElementById("result");
    liElements.forEach((li) => {
        result.textContent += li.textContent + "\n";
    })
}