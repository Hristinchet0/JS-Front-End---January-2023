function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger'
    const inputName = document.querySelector('#controls > div:nth-child(1) > input[type=text]');
    const inputMessage = document.querySelector('#controls > div:nth-child(2) > input[type=text]');
    const sendButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');

    sendButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', refreshMessages);

    async function sendMessage(event) {
        event.preventDefault();

        const author = inputName.value;
        const content = inputMessage.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ author, content })
        }
    
        const response = await fetch(BASE_URL, httpHeaders);
        const data = await response.json();

        inputName.value = '';
        inputMessage.value = '';

        refreshMessages();
        
    }

    async function refreshMessages() {

        let textArea = document.getElementById('messages');

        const response = await fetch(BASE_URL);
        const data = await response.json();
        let comment = [];
        Object.values(data).forEach((obj) =>
            comment.push(`${obj.author}: ${obj.content}`)
        );


        textArea.value = comment.join('\n');
    }
}

attachEvents();