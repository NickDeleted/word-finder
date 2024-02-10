import { filterWords } from './filterWords';
import { outputWords } from '../utils/outputWords';

function searchStart() {
  const searchButton = document.getElementById('search-button');
  
  searchButton.addEventListener('click', event => {
    
    event.preventDefault();
    const wordsData = filterWords();

    outputWords(wordsData);
  });
}

export { searchStart };