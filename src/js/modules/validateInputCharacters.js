function validateInputCharacters() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-я]/, '');
    });
  });

}

export { validateInputCharacters };