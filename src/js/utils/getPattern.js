function getPattern() {

  const inputs = document.querySelectorAll('.input__letter');

  const valuesAr = [];
  
  inputs.forEach( input => {
    valuesAr.push(input.value);
  });
  
  return valuesAr;
}

export { getPattern };