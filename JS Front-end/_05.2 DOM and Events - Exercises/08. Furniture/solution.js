function solve() {
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName("textarea"));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName("button"));
  const tbody = document.querySelector(".table > tbody");

  generateBtn.addEventListener("click", generateHandler);
  buyBtn.addEventListener("click", buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElementFunction("tr", "", tbody);
      const firstColumnTd = createElementFunction("td", "", tableRow);
      const htmlImg = createElementFunction("img", "", firstColumnTd, "", "", { src: img, });

      const secondColumnTd = createElementFunction("td", "", tableRow);
      createElementFunction("p", name, secondColumnTd);

      const thirdColumnTd = createElementFunction("td", "", tableRow);
      createElementFunction("p", price, thirdColumnTd);

      const fourthColumnTd = createElementFunction("td", "", tableRow);
      createElementFunction("p", decFactor, fourthColumnTd);

      const fifthColumnTd = createElementFunction("td", "", tableRow);
      createElementFunction("input", "", fifthColumnTd, "", "", { type: "checkbox" });
    }
  }

  function buyHandler() {
    const allCheckedInputs = document.querySelectorAll('tbody tr input:checked');

    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const input of allCheckedInputs) {
      const tableRow = input.parentElement.parentElement;
      const [firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
      let item = secondColumn.children[0].textContent;
      //let item = tableRow.querySelector('td p:nth-child(1)').textContent;
      boughtItems.push(item);
      let currentPrice = Number(thirdColumn.children[0].textContent);
      totalPrice += currentPrice;
      let currentDecFactor = Number(fourthColumn.children[0].textContent);
      totalDecFactor += currentDecFactor;
    }

    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${totalDecFactor / allCheckedInputs.length}`;
  }

  //type = string
  //content = string (text content)
  //id = string
  //classes = array of strings
  //attributes = object
  //Factory Function for DOM elements
  function createElementFunction(
    type,
    content,
    parentNode,
    id,
    classes,
    attributes
  ) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input") {
      htmlElement.textContent = content;
    }

    if (content && type === "input") {
      htmlElement.value = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    //['list', 'item', ...]
    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    //{src: 'link to image', href: 'link to site', type: checkbox})
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}

