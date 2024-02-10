import { autoNextInput } from './modules/autoNextInput';
import { previousInput } from './modules/previousInput';
import { validateInputCharacters } from './modules/validateInputCharacters';

window.addEventListener('DOMContentLoaded', () => {
  autoNextInput();
  previousInput();
  validateInputCharacters();
});