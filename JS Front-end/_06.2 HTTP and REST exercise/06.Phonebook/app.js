function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    const phoneBookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadPhoneBookHandler);
    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            let phoneBookData = await phoneBookRes.json(); //get data from phoneBookRes object
            phoneBookData = Object.values(phoneBookData) // array from objects
            phoneBookContainer.innerHTML = ''; //clear loaded data in phoneBookContainer

            for (const { person, phone, _id } of phoneBookData) { //create phonebook list
                const li = document.createElement('li'); //create li element for the person
                phoneBookContainer.appendChild(li);
                li.innerHTML = `${person}: ${phone}`;

                const deleteButton = document.createElement('button'); //create button for deleting
                deleteButton.innerHTML = 'Delete';
                li.appendChild(deleteButton); 

                deleteButton.id = _id; //create function for delete person phone from list
                deleteButton.addEventListener('click', deletePhoneBookRecordHandler);


            }
        } catch (error) {
            console.log(error);
        }
    }

    createBtn.addEventListener('click', createPhoneBookHandler);
    function createPhoneBookHandler() {
        const person = personInput.value; //get input value
        const phone = phoneInput.value;

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person, phone})
        }

        fetch(BASE_URL, httpHeaders)
            .then((response) => response.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((error) => {
                console.log(error);
            })



    }

    async function deletePhoneBookRecordHandler() {
        // const id = e.currentTarget.id;
        const id = this.id;
        
        //send fetch request to delete entity record
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(BASE_URL + id, httpHeaders)
            .then((response) => response.json())
            .then(loadPhoneBookHandler)
            .catch((error) => {
                console.log(error);
            }) 

    }
}

attachEvents();