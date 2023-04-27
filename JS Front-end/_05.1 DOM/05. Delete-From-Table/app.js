function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll(
        "#customers tr td:nth-child(2)");

    for (let td of secondColumn) {
        if (td.textContent === email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted";
            return;
        }
        document.getElementById('result').textContent = "Not found.";
    }
}

/*
function deleteByEmail() {
    const result = document.getElementById('result');
    const input = document.querySelector('input[name="email"]');
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let emailValue = input.value;

    let foundElement = evenTds.find((td) => td.textContent === emailValue);

    if (foundElement) {
        foundElement.parentElement.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}
*/