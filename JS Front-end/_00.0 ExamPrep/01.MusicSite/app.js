window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;

    const inputDOMSelectors = {
        genre: document.querySelector('input[name="genre"]'),
        name: document.querySelector('input[name="name"]'),
        author: document.querySelector('input[name="author"]'),
        date: document.querySelector('input[name="date"]'),
    };

    const otherDOMSelectors = {
        addBtn: document.getElementById('add-btn'),
        allHitsContainer: document.querySelector('.all-hits-container'),
        savedContainer: document.querySelector('.saved-container'),
        totalLikesContainer: document.querySelector('.likes > p')
    };

    otherDOMSelectors.addBtn.addEventListener('click', addSongHandler);


    function addSongHandler(event) {
        event.preventDefault();

        let allInputsAreNonEmpty = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allInputsAreNonEmpty) {
            console.log('empty input');
            return;
        }

        const { genre, name, author, date } = inputDOMSelectors;
        const songContainer = createElement('div', otherDOMSelectors.allHitsContainer, '', [ 'hits-info']);
        createElement('img', songContainer, null, null, null, { src: './static/img/img.png' });
        createElement('h2', songContainer, `Genre: ${genre.value}`);
        createElement('h2', songContainer, `Name: ${name.value}`);
        createElement('h2', songContainer, `Author: ${author.value}`);
        createElement('h3', songContainer, `Date: ${date.value}`);
        const saveBtn = createElement('button', songContainer, 'Save song', ['save-btn']);
        const likeBtn = createElement('button', songContainer, 'Like song', ['like-btn']);
        const deleteBtn = createElement('button', songContainer, 'Delete', ['delete-btn']);

        likeBtn.addEventListener('click', likeSongHandler);
        deleteBtn.addEventListener('click', deleteSongHandler);
        saveBtn.addEventListener('click', saveSongHandler);

        clearAllInputs();
    }

    function saveSongHandler() {
        const songReference = this.parentNode; //this is an object reference
        const saveBtn = songReference.querySelector('.save-btn');
        const likeBtn = songReference.querySelector('.like-btn');

        otherDOMSelectors.savedContainer.appendChild(songReference);
        saveBtn.remove();
        likeBtn.remove();

    }

    function deleteSongHandler() {
        this.parentNode.remove();
    }

    function likeSongHandler() {
        this.setAttribute('disabled', true);
        totalLikes++;
        otherDOMSelectors.totalLikesContainer.textContent = `Total Likes: ${totalLikes}`;
    }

    function clearAllInputs() {
        Object.values(inputDOMSelectors)
            .forEach((input) => input.value = '');
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