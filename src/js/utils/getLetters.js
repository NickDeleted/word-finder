function getLetters(inputId) {
  const input = document.getElementById(inputId);
  const value = input.value;
  const letters = [...value];
  return letters;
}

export { getLetters };