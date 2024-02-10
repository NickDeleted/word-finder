function outputWords(words) {

  const wordsField = document.getElementById('words-field');

  wordsField.innerHTML = '';

  words.forEach( word => {
    wordsField.innerHTML += `<span>${word}</span>`
  });

}

export { outputWords };