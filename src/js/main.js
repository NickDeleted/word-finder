import { autoNextInput } from './modules/autoNextInput';
import { previousInput } from './modules/previousInput';
import { searchStart } from './modules/searchStart';
import { validateInputCharacters } from './modules/validateInputCharacters';

window.addEventListener('DOMContentLoaded', () => {
  autoNextInput();
  previousInput();
  searchStart();
  validateInputCharacters();
});