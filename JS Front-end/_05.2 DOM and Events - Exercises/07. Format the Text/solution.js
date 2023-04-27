function solve() {
  const output = document.getElementById('output');

  const textarea = document.getElementById('input');

  let sentence = textarea.value.split('.');
  sentence.pop();

  while (sentence.length > 0) {
    let paragraphSentence = sentence.splice(0, 3)
    .map((p) => p.trimStart());

    const newParagraph = document.createElement('p');
    newParagraph.textContent = paragraphSentence.join('.') + '.';
    output.appendChild(newParagraph);
  }
}