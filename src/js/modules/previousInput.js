function previousInput() {
  const inputs = document.querySelectorAll('.input__letter');

  inputs.forEach(input => {
    input.addEventListener('keyup', e => {
      let target = e.target;
      if (e.keyCode === 8) {
        let prevInput = target;
        while (prevInput = input.previousElementSibling) {
          if (prevInput == null) {
            break;
          }
          if (prevInput.tagName.toLowerCase() == 'input') {
            prevInput.focus();
            break;
          }
        }
      }
    })
  })
}

export { previousInput };