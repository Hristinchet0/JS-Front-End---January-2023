function addItem() {
    let ulContainer = document.getElementById("items");
    let input = document.getElementById("newItemText");
    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    ulContainer.appendChild(newLi);
    input.value = "";
}