window.addEventListener("load", solve);

function solve() {
  let sendButton = document.querySelector('#right > form > button');
  let clearButton = document.querySelector('#completed-orders > button');

  sendButton.addEventListener("click", sendOrder);
  clearButton.addEventListener("click", clearOrder);

  let productTypeSelect = document.querySelector('#type-product');
  let descriptionTextArea = document.querySelector('#description');
  let clientNameInput = document.querySelector('#client-name');
  let clientPhoneInput = document.querySelector('#client-phone');

  let reservedOrdersSection = document.querySelector('#received-orders');
  let completedOrdersSection = document.querySelector('#completed-orders');

  function sendOrder(event) {
    event.preventDefault();

    let productType = productTypeSelect.value;
    let description = descriptionTextArea.value;
    let clientName = clientNameInput.value;
    let clientPhone = clientPhoneInput.value;

    if (description == '' || clientName == '' || clientPhone == '') {
      return;
    }

    productTypeSelect.value = '';
    descriptionTextArea.value = '';
    clientNameInput.value = '';
    clientPhoneInput.value = '';

    let containerDivElement = document.createElement('div');
    containerDivElement.classList.add('container');

    let h2Element = document.createElement('h2');
    h2Element.textContent = `Product type for repair: ${productType}`;

    let h3Element = document.createElement('h3');
    h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`;

    let h4Element = document.createElement('h4');
    h4Element.textContent = `Description of the problem: ${description}`;
    
    let startBtn = document.createElement('button');
    startBtn.classList.add('start-btn');
    startBtn.textContent = 'Start repair';

    let finishBtn = document.createElement('button');
    finishBtn.classList.add('finish-btn');
    finishBtn.textContent = 'Finish repair';
    finishBtn.disabled = true;

    startBtn.addEventListener('click', startRepair);
    finishBtn.addEventListener('click', finishRepair);

    containerDivElement.appendChild(h2Element);
    containerDivElement.appendChild(h3Element);
    containerDivElement.appendChild(h4Element);
    containerDivElement.appendChild(startBtn);
    containerDivElement.appendChild(finishBtn);
    reservedOrdersSection.appendChild(containerDivElement);
  
  }

  function startRepair(event) {
    event.currentTarget.disabled = true;
    event.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
  }

  function finishRepair(event) {
    let containerDiv = event.currentTarget.parentNode;
    //remove the buttons
    event.currentTarget.remove();
    containerDiv.querySelector('.start-btn').remove();
    containerDiv.remove();

    completedOrdersSection.appendChild(containerDiv);
  }

  function clearOrder(event) {
    let allContainers = Array.from(event.currentTarget.parentNode.querySelectorAll('.container'));

    for (const container of allContainers) {
      container.remove();
    }

  }
}

// function solve() {
//   let description = document.querySelector("#description");
//   let clientName = document.querySelector("#client-name");
//   let phone = document.querySelector("#client-phone");
//   let repairType = document.querySelector("#type-product");
//   let box = document.getElementById("received-orders");
//   let completed = document.getElementById("completed-orders");

//   let btn = document.querySelector("form button");
//   btn.addEventListener("click", onClickSubmit);

//   function onClickSubmit(ev) {
//     ev.preventDefault();
//     let descriptionValue = description.value;
//     let clientNameValue = clientName.value;
//     let phoneValue = phone.value;

//     description.value = "";
//     clientName.value = "";
//     phone.value = "";

//     if (descriptionValue != "" && clientNameValue != "" && phoneValue != "") {
//       let newField = document.createElement("div");
//       newField.className = "container";
//       box.appendChild(newField);

//       let typeField = createElements(
//         "h2",
//         {},
//         `Product type for repair: ${repairType.value}`
//       );
//       let clientInfo = createElements(
//         "h3",
//         {},
//         `Client information: ${clientNameValue}, ${phoneValue}`
//       );
//       let descriptionField = createElements(
//         "h4",
//         {},
//         `Description of the problem: ${descriptionValue}`
//       );
//       let startBtn = createElements(
//         "button",
//         { className: "start-btn" },
//         "Start repair"
//       );
//       let finishBtn = createElements(
//         "button",
//         { className: "finish-btn", disabled: true },
//         "Finish repair"
//       );

//       function createElements(element, attr, content) {
//         let newElement = document.createElement(element);
//         newElement.textContent = content;
//         for (let a in attr) {
//           newElement[a] = attr[a];
//         }

//         newField.appendChild(newElement);

//         return newElement;
//       }

//       startBtn.addEventListener("click", onClickStart);

//       function onClickStart(e) {
//         startBtn.disabled = true;
//         finishBtn.disabled = false;

//         finishBtn.addEventListener("click", onClickFinish);

//         function onClickFinish(event) {
//           let newDiv = document.createElement("div");
//           newDiv.className = "container";
//           completed.appendChild(newDiv);

//           newDiv.appendChild(typeField);
//           newDiv.appendChild(clientInfo);
//           newDiv.appendChild(descriptionField);

//           newField.remove();

//           let clearBtn = document.querySelector(".clear-btn");
//           clearBtn.addEventListener("click", clear);

//           function clear(ev2) {
//             newDiv.remove();
//           }
//         }
//       }
//     }
//   }
// }
