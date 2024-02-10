function inputControl() {

  const includedInput = document.getElementById('included-letter');
  const excludedInput = document.getElementById('excluded-letter');
  let enteredChars = '';

  const inputHandler = inputElement => {

    inputElement.addEventListener('input', (event) => {

      if (event.inputType === 'deleteContentBackward') {
        const inputValue = inputElement.value;
        enteredChars = enteredChars.split('').filter(char => char !== inputValue.slice(-1)).join('');
      }
      const lastChar = inputElement.value.slice(-1);
      
      if (enteredChars.includes(lastChar) && inputElement.value.length > 0) {
        inputElement.value = inputElement.value.slice(0, -1);
      } else {
        enteredChars += lastChar;
      }

    });

    inputElement.addEventListener('paste', event => {
      event.preventDefault();
    });

    inputElement.addEventListener('keydown', event => {
      
      if (event.key === 'Backspace' && event.target === inputElement) {
        const inputValue = inputElement.value;

        enteredChars = enteredChars.split('').filter(char => char !== inputValue.slice(-1)).join('');

      }
    });

  };

  inputHandler(includedInput);
  inputHandler(excludedInput);

  const clearInput = () => {
    const clearButtons = document.querySelectorAll('.clear__button');

    clearButtons.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();

        const input = button.previousElementSibling;
        const inputValue = input.value;

        enteredChars = enteredChars.split('').filter(char => !inputValue.includes(char)).join('');
        input.value = '';

        return enteredChars;
      });
    });
  };

  clearInput();

}

export { inputControl };