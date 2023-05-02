window.addEventListener('load', solve);

function solve() {
    let countTasks = 0;
    let sumOfTotalPoints = 0;
    const allTasks = new Map();
    let forDelete;

    const info = {
        id: null,
        title: null,
        description: null,
        label: null,
        points: null,
        assignee: null,
    };

    const inputDOMSelectors = {
        id: document.getElementById('task-id'),
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
    };

    const otherDOMSelectors = {
        createBtn: document.getElementById('create-task-btn'),
        section: document.getElementById('tasks-section'),
        totalPoints: document.getElementById('total-sprint-points'),
        deleteTaskBtn: document.getElementById('delete-task-btn'),
    };

    otherDOMSelectors.createBtn.addEventListener('click', createButtonHandler);

    otherDOMSelectors.deleteTaskBtn.addEventListener('click', deleteButtonHandler);

    function createButtonHandler(ev) {
        ev.preventDefault();

        countTasks++;

        const {id, title, description, label, points, assignee} = inputDOMSelectors;

        id.value = countTasks;

        const areValidInputsFileds = Object.values(inputDOMSelectors).every((input) => input.value !== "");

        if (!areValidInputsFileds) {
            return;
        }

        const article = createElement('article', otherDOMSelectors.section, '', `task-${id.value}`, ['task-card']);

        if (label.value === 'Feature') {
            let div = createElement('div', article, '', '', [
                'task-card-label',
                'feature',]);

            div.innerHTML = 'Feature &#8865';
        } else if (label.value === 'Low Priority Bug') {
            let div = createElement('div', article, '', '', [
                'task-card-label','low-priority',]);
            div.innerHTML = 'Low Priority Bug &#9737';
        } else if (label.value === 'High Priority Bug') {
            let div = createElement('div', article, '', '', [
                'task-card-label',
                'high-priority',]);
            div.innerHTML = 'High Priority Bug &#9888';
        }

        createElement('h3', article, title.value, '', ['task-card-title']);
        createElement('p', article, description.value, '', [
            'task-card-description',]);
        createElement('div', article, `Estimated at ${points.value} pts`, '', [
            'task-card-points',]);
        sumOfTotalPoints += Number(points.value);

        createElement('div', article, `Assigned to: ${assignee.value}`, '', [
            'task-card-assignee',
        ]);
        let div = createElement('div', article, '', '', ['task-card-actions']);

        const deleteBtn = createElement('button', div, 'Delete');

        deleteBtn.addEventListener('click', deleteHandlerBtn);

        for (const key in inputDOMSelectors) {
            info[key] = inputDOMSelectors[key].value;
        }

        allTasks.set(id.value, info);

        otherDOMSelectors.totalPoints.textContent = `Total Points ${sumOfTotalPoints}pts`;
        clear();
    }

    function deleteButtonHandler() {
        forDelete.remove();

        Object.values(inputDOMSelectors).forEach(
            (input) => {
                (input.value = '');
                (input.disabled = '')

            }
        );

        otherDOMSelectors.createBtn.disabled = '';

        otherDOMSelectors.deleteTaskBtn.disabled = 'true';

    }
    function deleteHandlerBtn(event) {
        let content = event.target.parentElement.parentElement.id;

        let text = content.split('-');
        let id = text[1];

        let objectForDelete = allTasks.get(id);

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = objectForDelete[key];
        }

        forDelete = event.target.parentElement.parentElement;
        countTasks--;
        sumOfTotalPoints -= Number(info.points);
        otherDOMSelectors.totalPoints.textContent = `Total Points ${sumOfTotalPoints}pts`;

        Object.values(inputDOMSelectors).forEach(
            (input) => (input.disabled = 'true')
        );

        otherDOMSelectors.createBtn.disabled = 'true';
        otherDOMSelectors.deleteTaskBtn.disabled = '';
    }

    function clear() {
        Object.values(inputDOMSelectors).forEach((input) => (input.value = ''));
    }

    function createElement(type, parent, content, id, classes, attributes) {

        const elementType = document.createElement(type);

        if (content) {
            if (type !== 'input' && type !== 'textarea') {
                elementType.textContent = content;
            } else {
                elementType.value = content;
            }
        }

        if (id) {
            elementType.setAttribute('id', id);
        }

        if (classes) {
            for (const class1 of classes) {
                elementType.classList.add(class1);
            }
        }

        if (parent) {
            parent.appendChild(elementType);
        }

        if (attributes) {
            for (const key in attributes) {
                elementType.setAttribute(key, attributes[key]);
            }
        }

        return elementType;
    }
}