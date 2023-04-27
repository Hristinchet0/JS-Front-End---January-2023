function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';
  const inputFirstName = document.querySelector('#form > div.inputs > input[type=text]:nth-child(1)');
  const inputLastName = document.querySelector('#form > div.inputs > input[type=text]:nth-child(2)');
  const inputFacultyNumber = document.querySelector('#form > div.inputs > input[type=text]:nth-child(3)');
  const inputGrade = document.querySelector('#form > div.inputs > input[type=text]:nth-child(4)');
  const submitBtn = document.querySelector('#submit');
  const StudentContainer = document.querySelector('#results > tbody');

  const firstNameColumnContainer = document.querySelector('#results > thead > tr > th:nth-child(1)');
  const lastNameColumnContainer = document.querySelector('#results > thead > tr > th:nth-child(2)');
  const facultyNumberColumnContainer = document.querySelector('#results > thead > tr > th:nth-child(3)');
  const gradeColumnContainer = document.querySelector('#results > thead > tr > th:nth-child(4)');

  loadAllStudents();

  submitBtn.addEventListener('click',createStudent);

  async function loadAllStudents() {
    StudentContainer.innerHTML = '';
    
    const studentResponse = await fetch(BASE_URL);
    const studentsData = await studentResponse.json();
    
    for (const studentId in studentsData) {
      const { facultyNumber, firstName, grade, lastName} = studentsData[studentId];
      const tableRow = document.createElement('tr');
      const firstNameColumn = document.createElement('td');
      const lastNameColumn = document.createElement('td');
      const facultyNumberColumn = document.createElement('td');
      const gradeColumn = document.createElement('td');

      firstNameColumn.textContent = firstName;
      lastNameColumn.textContent = lastName;
      facultyNumberColumn.textContent = facultyNumber;
      gradeColumn.textContent = grade;


      tableRow.appendChild(firstNameColumn);
      tableRow.appendChild(lastNameColumn);
      tableRow.appendChild(facultyNumberColumn);
      tableRow.appendChild(gradeColumn);
      StudentContainer.appendChild(tableRow);
    }
  }

  async function createStudent() {
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const facultyNumber = inputFacultyNumber.value;
    const grade = inputGrade.value;

    try {
      if (firstName.length > 0 && lastName.length > 0
        && facultyNumber.length > 0 && grade.length > 0) {
          const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, facultyNumber, grade},
              )};
              const response = await fetch(BASE_URL, httpHeaders);
              
              loadAllStudents();
              inputFirstName.value = '';
              inputLastName.value = '';
              inputFacultyNumber.value = '';
              inputGrade.value = '';
      }
  } catch(error) {
    console.error(error);
  }
}


}

attachEvents();