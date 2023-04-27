function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';

  //Load all books by clicking the button "LOAD ALL BOOKS"
  const loadBooks = document.getElementById('loadBooks');
  const booksContainer = document.querySelector('table > tbody');

  //Create Book
  const [ titleInput, authorInput ] = Array.from(document.querySelectorAll('#form > input'));
  const submitBtn = document.querySelector('#form > button');

  loadBooks.addEventListener('click', loadAllBooksHandler);
  submitBtn.addEventListener('click', submitBookHandler);

  //Edit Book
  let allBooks = {};
  let editBookId = null;
  const formHeader = document.querySelector('#form > h3');

  async function loadAllBooksHandler() {

    booksContainer.innerHTML = '';
    const booksResponse = await fetch(BASE_URL);
    const booksData = await booksResponse.json();

    allBooks = booksData;
    
    for (const bookId in booksData) {
      const { author, title} = booksData[bookId];
      const tableRow = document.createElement('tr');
      const titleColumn = document.createElement('td');
      const authorColumn = document.createElement('td');
      const buttonsColumn = document.createElement('td');
      const editButton = document.createElement('button');
      const deleteButton = document.createElement('button');
      titleColumn.textContent = title;
      authorColumn.textContent = author;
      editButton.textContent = 'Edit';
      deleteButton.textContent = 'Delete';
      deleteButton.id = bookId;

      //Edit Book
      editButton.addEventListener('click', () => {
        editBookId = bookId;
        formHeader.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
        titleInput.value = title;
        authorInput.value = author;
      });

      deleteButton.addEventListener('click', deleteBookHandler);

      //DOM manipulation
      tableRow.appendChild(titleColumn);
      tableRow.appendChild(authorColumn);
      buttonsColumn.appendChild(editButton);
      buttonsColumn.appendChild(deleteButton);
      tableRow.appendChild(buttonsColumn);
      booksContainer.appendChild(tableRow);

    }
  }

  async function submitBookHandler() {
    // event.preventDefault(); // not refreshing the page for "form"
    const title = titleInput.value;
    const author = authorInput.value;

    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ title, author })
    }
    let url = BASE_URL;

    if (formHeader.textContent === 'Edit FORM') {
      httpHeaders.method = 'PUT';
      url += editBookId;
    }

    const resData = await fetch(url, httpHeaders);
    loadAllBooksHandler();
 
    if (formHeader.textContent === 'Edit FORM') {
      formHeader.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }

    titleInput.value = '';
    authorInput.value = '';
  
  }

  //Delete Book
  async function deleteBookHandler(e) {
    const currentId = e.currentTarget.id;

    let url = BASE_URL + currentId;
    const httpHeaders = {
      method: 'DELETE'
    }

    const response = await fetch(url, httpHeaders);

    loadAllBooksHandler();
  }

}

attachEvents();