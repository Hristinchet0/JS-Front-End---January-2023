// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const titleInput = document.getElementById('title');
    const addButton = document.getElementById('add-button');
    const loadButton = document.getElementById('load-button');
    const toDoListContainer = document.getElementById('todo-list');

    loadButton.addEventListener('click', loadTasksHandler);
    addButton.addEventListener('click', addTaskHandler);
    

    function loadTasksHandler(event) {
        event?.preventDefault();

        toDoListContainer.innerHTML = '';

        fetch (BASE_URL)
            .then((data) => data.json())
            .then((tasksResponse) => {
                const tasks = Object.values(tasksResponse);

                for (const {name, _id} of tasks) {
                    const li = document.createElement('li');
                    const span = document.createElement('span');
                    const removeBtn = document.createElement('button');
                    const editBtn = document.createElement('button');

                    li.id = _id;
                    span.textContent = name;
                    removeBtn.textContent = 'Remove';
                    editBtn.textContent = 'Edit';

                    editBtn.addEventListener('click', loadEditFormHandler);
                    removeBtn.addEventListener('click', removeTaskHandler);

                    //Could break judge if i use only append()
                    li.appendChild(span);
                    li.appendChild(removeBtn);
                    li.appendChild(editBtn);
                    toDoListContainer.appendChild(li);
                }
            }) .catch((error) => {
                console.log(error);
            });

    }

    function loadEditFormHandler(event) {
        const liParent = event.currentTarget.parentNode;
        const [ span, _removeBtn, editBtn] = Array.from(liParent.children);
        const editInput = document.createElement('input');
        editInput.value = span.textContent;
        liParent.prepend(editInput);
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click', submitTaskHandler);
        liParent.append(submitBtn);
        span.remove();
        editBtn.remove();
        
    }

    function submitTaskHandler(event) {
        // const id = this.parentNode.id;
        const liParent = event.currentTarget.parentNode;
        const id = liParent.id;
        const [ input ] = Array.from(liParent.children);
        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ name: input.value})
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadTasksHandler())
            .catch((error) => {
                console.log(error);
        });
    }

    function addTaskHandler(event) {
        event.preventDefault();
        const name = titleInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ name })
        };

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadTasksHandler();
                 titleInput.value = '';
            }).catch(error => {
                console.log(error);
        });

    }

    function removeTaskHandler(event) {
        event.preventDefault();
        const id = event.currentTarget.parentNode.id;
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadTasksHandler())
            .catch(errorHandler);

    }


    function errorHandler(error) {
        console.error(error);
    }

}

attachEvents();
