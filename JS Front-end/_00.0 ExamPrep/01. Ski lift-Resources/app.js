window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
    }

    const otherDomSelectors = {
        nextBtn: document.getElementById('next-btn'),
        infoContainer: document.querySelector('.ticket-info-list'),
        confirmContainer: document.querySelector('.confirm-ticket'),
        main: document.getElementById('main'),
        form: document.querySelector('form'),
        body: document.getElementById('body'),
    }

    let ticketInfo = {};

    otherDomSelectors.nextBtn.addEventListener('click', nextStepHandler);

    function nextStepHandler(event) {
        event.preventDefault();

        let allFieldsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allFieldsAreValid) {
            return;
        }

        const { firstName, lastName, peopleCount, fromDate, daysCount } = inputDOMSelectors;
        ticketInfo = {
            firstName: firstName.value,
            lastName: lastName.value,
            peopleCount: peopleCount.value,
            fromDate: fromDate.value,
            daysCount: daysCount.value,
        };

        const liItem = createElement('li', otherDomSelectors.infoContainer, '', ['ticket']);
        const article = createElement('article', liItem);
        createElement('h3', article,  `Name: ${firstName.value} ${lastName.value}`);
        createElement('p', article, `From date: ${fromDate.value}`);
        createElement('p', article, `For ${daysCount.value} days`);
        createElement('p', article, `For ${peopleCount.value} people`);
        const editBtn = createElement('button', liItem, 'Edit', ['edit-btn']);
        const continueBtn = createElement('button', liItem, 'Continue', ['continue-btn']);

        editBtn.addEventListener('click', editTicketHandler);
        continueBtn.addEventListener('click', continueEventHandler);

        otherDomSelectors.form.reset();

        otherDomSelectors.nextBtn.setAttribute('disabled', true);

    }

    function editTicketHandler() {
        this.parentNode.remove();

        for(const key in ticketInfo) {
            inputDOMSelectors[key].value = ticketInfo[key];
        }

        otherDomSelectors.nextBtn.removeAttribute('disabled');
    }

    function continueEventHandler() {
        const liItem = this.parentNode;
        const editBtn = liItem.querySelector('.edit-btn');
        const continueBtn = liItem.querySelector('.continue-btn');
        const confirmBtn = createElement('button', liItem, 'Confirm', ['confirm-btn']);
        const cancelBtn = createElement('button', liItem, 'Cancel', ['cancel-btn']);
        otherDomSelectors.confirmContainer.appendChild(liItem);

        editBtn.remove();
        continueBtn.remove();

        cancelBtn.addEventListener('click', cancelBtnHandler);
        confirmBtn.addEventListener('click', confirmBtnHandler);



    }

    function confirmBtnHandler() {
        otherDomSelectors.main.remove();
        createElement('h1', otherDomSelectors.body, 'Thank you, have a nice day!', null, 'thank-you');
        const backBtn = createElement('button', otherDomSelectors.body, 'Back', null, 'back-btn');

        backBtn.addEventListener('click', () => {
            window.location.reload();
        })

    }
    
    function cancelBtnHandler() {
        this.parentNode.remove();
        otherDomSelectors.nextBtn.removeAttribute('disabled');
    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);
      
        if (content && useInnerHtml) {
          htmlElement.innerHTML = content;
        } else {
          if (content && type !== 'input') {
            htmlElement.textContent = content;
          }
      
          if (content && type === 'input') {
            htmlElement.value = content;
          }
        }
      
        if (classes && classes.length > 0) {
          htmlElement.classList.add(...classes);
        }
      
        if (id) {
          htmlElement.id = id;
        }
      
        // { src: 'link', href: 'http' }
        if (attributes) {
          for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key])
          }
        }
      
        if (parentNode) {
          parentNode.appendChild(htmlElement);
        }
      
        return htmlElement;
    }
}


    
    
