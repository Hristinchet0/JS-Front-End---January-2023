function solve() {
    const inputDOMSelectors = {
        name: document.querySelector('#container > input[type=text]:nth-child(1)'),
        age: document.querySelector('#container > input[type=text]:nth-child(2)'),
        kind: document.querySelector('#container > input[type=text]:nth-child(3)'),
        currentOwner: document.querySelector('#container > input[type=text]:nth-child(4)'),
    };

    const otherDOMSelectors = {
        addBtn: document.querySelector('#container > button'),
        adoptionUl: document.querySelector('#adoption > ul'),
        adoptedUl: document.querySelector('#adopted > ul'),
        form: document.querySelector('form'),
    };

    let catInfo = {};

    otherDOMSelectors.addBtn.addEventListener('click', addBtnHandler);

    function addBtnHandler(e) {
        e.preventDefault();

        let allFieldsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allFieldsAreValid) {
            return;
        }

        if (!Number(inputDOMSelectors.age.value)) {
            console.log('not a number');
            return;
        }

        const { name, age, kind, currentOwner } = inputDOMSelectors;

        catInfo = {
            name: name.value,
            age: age.value,
            kind: kind.value,
            currentOwner: currentOwner.value,
        };

        const liItem = document.createElement('li');
        const pItem = document.createElement('p');
        pItem.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
        const spanItem = document.createElement('span');
        spanItem.innerHTML = `Owner: ${currentOwner.value}`;
        const contactBtn = document.createElement('button');
        contactBtn.innerHTML = 'Contact with owner';

        liItem.appendChild(pItem);
        liItem.appendChild(spanItem);
        liItem.appendChild(contactBtn);
        otherDOMSelectors.adoptionUl.appendChild(liItem);

        contactBtn.addEventListener("click", contactBtnHandler);

        otherDOMSelectors.form.reset();

    }

    function contactBtnHandler() {

        const liItem = this.parentNode;
        const contactBtn = liItem.querySelector('#adoption > ul > li > button');
        contactBtn.remove();
        const divItem = document.createElement('div');
        let newOwnerInput = document.createElement('input');
        newOwnerInput.placeholder = 'Enter your names';
        const yesITakeItBtn = document.createElement('button');
        yesITakeItBtn.innerHTML = 'Yes! I take it!';
        divItem.appendChild(newOwnerInput);
        divItem.appendChild(yesITakeItBtn);
        liItem.appendChild(divItem);

        yesITakeItBtn.addEventListener("click", e => {
            e.preventDefault();

            let newOwnerName = newOwnerInput.value;

            if (newOwnerName === "") {
                return;
            }

            otherDOMSelectors.adoptedUl.appendChild(liItem);
            newOwnerInput.remove();
            yesITakeItBtn.remove();
            const spanItem = liItem.querySelector('#adopted > ul > li > span');
            spanItem.remove();

            const newOwnerElement = document.createElement('span');
            newOwnerElement.innerHTML =`New Owner: ${newOwnerName}`;
            liItem.appendChild(newOwnerElement);

            const checkedBtn = document.createElement('button');
            checkedBtn.innerHTML = 'Checked';
            liItem.appendChild(checkedBtn);

            checkedBtn.addEventListener('click', () => {
                liItem.remove();
            })
        });

    }

}
