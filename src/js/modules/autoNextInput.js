function autoNextInput() {
  const inputs = document.querySelectorAll('.input__letter');

  inputs.forEach(input => {
    input.addEventListener('keyup', e => {
      let target = e.target;

      if (input.value.length >= 1) {
        let nextInput = target;

        while (nextInput = input.nextElementSibling) {
          if (nextInput == null) {
            break;
          }
          
          if (nextInput.tagName.toLowerCase() == 'input') {
            nextInput.focus();
            break;
          }
        }
      }
    })
  })
}

export { autoNextInput };