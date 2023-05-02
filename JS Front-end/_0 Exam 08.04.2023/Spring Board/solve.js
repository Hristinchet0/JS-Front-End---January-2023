function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBoardButton = document.getElementById('load-board-btn');
    const toDoContainer = document.querySelector('#todo-section > ul');
    const inProgressContainer = document.querySelector('#in-progress-section > ul');
    const codeReviewContainer = document.querySelector('#code-review-section > ul');
    const doneContainer = document.querySelector('#done-section > ul');
    let addTaskButton = document.getElementById('create-task-btn');


    loadBoardButton.addEventListener('click', loadAddTaskHandler);

    addTaskButton.addEventListener('click', addTaskButtonHandler);


    function loadAddTaskHandler(event) {
        if (event) {
            event.preventDefault()
        }

        toDoContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        codeReviewContainer.innerHTML = '';
        doneContainer.innerHTML = '';

        fetch(BASE_URL)
            .then(response => response.json())
            .then(responseData => {
                Object.values(responseData).forEach(item => {

                    if (item.status === 'ToDo') {
                        const li = document.createElement('li');
                        li.setAttribute('class', 'task');

                        const title = document.createElement('h3');
                        title.textContent = `${item.title}`;

                        const p = document.createElement('p');
                        p.textContent = `${item.description}`;

                        const moveInProgressButton = document.createElement('button');
                        moveInProgressButton.setAttribute('id', item._id);
                        moveInProgressButton.textContent = 'Move to In Progress';

                        li.appendChild(title);
                        li.appendChild(p);
                        li.appendChild(moveInProgressButton);
                        toDoContainer.appendChild(li);
                        moveInProgressButton.addEventListener('click', moveTaskHandler);

                    } else if (item.status === 'In Progress') {
                        const li = document.createElement('li');
                        li.setAttribute('class', 'task');

                        const title = document.createElement('h3');
                        title.textContent = `${item.title}`;

                        const p = document.createElement('p');
                        p.textContent = `${item.description}`;

                        const moveToCodeReviewButton = document.createElement('button');
                        moveToCodeReviewButton.setAttribute('id', item._id);
                        moveToCodeReviewButton.textContent = 'Move to Code Review';

                        li.appendChild(title);
                        li.appendChild(p);
                        li.appendChild(moveToCodeReviewButton);
                        inProgressContainer.appendChild(li);

                        moveToCodeReviewButton.addEventListener('click', moveTaskHandler);

                    } else if (item.status === 'Code Review') {

                        const li = document.createElement('li');
                        li.setAttribute('class', 'task');

                        const title = document.createElement('h3');
                        title.textContent = `${item.title}`;

                        const p = document.createElement('p');
                        p.textContent = `${item.description}`;

                        const moveToDoneButton = document.createElement('button');
                        moveToDoneButton.setAttribute('id', item._id);
                        moveToDoneButton.textContent = 'Move to Done';

                        li.appendChild(title);
                        li.appendChild(p);
                        li.appendChild(moveToDoneButton);
                        codeReviewContainer.appendChild(li);

                        moveToDoneButton.addEventListener('click', moveTaskHandler);
                    } else {

                        const li = document.createElement('li');
                        li.setAttribute('class', 'task');

                        const title = document.createElement('h3');
                        title.textContent = `${item.title}`;

                        const p = document.createElement('p');
                        p.textContent = `${item.description}`;

                        const closeButton = document.createElement('button');
                        closeButton.setAttribute('id', item._id);
                        closeButton.textContent = 'Close';

                        li.appendChild(title);
                        li.appendChild(p);
                        li.appendChild(closeButton);
                        doneContainer.appendChild(li);

                        closeButton.addEventListener('click', moveTaskHandler);
                    }

                });
            });
    }

    function moveTaskHandler(event) {
        if (event) {
            event.preventDefault()
        }

        let curId = event.target.id;

        if (event.target.textContent === 'Move to In Progress') {
            const httpHeaders = {
                method: "PATCH",
                body: JSON.stringify({
                    status: 'In Progress'
                })
            };

            fetch(`${BASE_URL}${curId}`, httpHeaders)
                .then(() => loadAddTaskHandler()
                ).catch(error => alert(error))

        } else if (event.target.textContent === 'Move to Code Review') {

            const httpHeaders = {
                method: "PATCH",
                body: JSON.stringify({
                    status: 'Code Review'
                })
            };

            fetch(`${BASE_URL}${curId}`, httpHeaders)
                .then(() => loadAddTaskHandler()
                ).catch(error => alert(error))

        } else if (event.target.textContent === 'Move to Done') {

            const httpHeaders = {
                method: "PATCH",
                body: JSON.stringify({
                    status: 'Done'
                })
            };

            fetch(`${BASE_URL}${curId}`, httpHeaders)
                .then(() => loadAddTaskHandler()
                ).catch(error => alert(error))

        } else if (event.target.textContent === 'Close') {

            fetch(`${BASE_URL}${curId}`, {
                method: "DELETE"
            })
                .then(response => {
                    loadAddTaskHandler()
                    return response.json()
                })
                .catch(error => alert(error));
        }
    }

    function addTaskButtonHandler(event) {
        if (event) {
            event.preventDefault()
        }
        let titleTask = document.getElementById('title');
        let description = document.getElementById('description');

        if (titleTask.value === ''
            || description.value === '') {
            return;
        }

        fetch(BASE_URL, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: titleTask.value,
                description: description.value,
                status: 'ToDo'
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Error creating new record!');
            }
            return response.json();
        }).catch(error => alert(error));

        loadAddTaskHandler();
        titleTask.value = '';

        description.value = '';

    }
}

attachEvents();
