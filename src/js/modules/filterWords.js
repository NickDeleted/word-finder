import { words } from '../wordlist/wordlist';
import { getLetters } from '../utils/getLetters';
import { getPattern } from '../utils/getPattern';

function filterWords() {

  const includedLetters = getLetters('included-letter');
  const excludedLetters = getLetters('excluded-letter');
  const pattern = getPattern();
  const blockResultInfo = document.getElementById('block-result-info');

  if (includedLetters.length === 0 && excludedLetters.length === 0 && pattern.every(elem => elem === '')) {

    blockResultInfo.classList.remove('hidden');
    return [];

  } else if (!blockResultInfo.classList.contains('hidden')) {

    blockResultInfo.classList.add('hidden');

  }

  return words.filter(word => {

    if (pattern.length !== word.length) {
      return false;
    }

    const lowercaseWord = word.toLowerCase();

    for (let i = 0; i < pattern.length; i++) {

      if (pattern[i] !== '' && pattern[i].toLowerCase() !== lowercaseWord[i]) {
        return false;
      }

      if (pattern[i] === '' && excludedLetters.includes(lowercaseWord[i])) {
        return false;
      }

    }

    return includedLetters.every(letter => lowercaseWord.includes(letter.toLowerCase()));
  });

}



export { filterWords };