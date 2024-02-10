import { autoNextInput } from './modules/autoNextInput';
import { inputControl } from './modules/inputControl';
import { previousInput } from './modules/previousInput';
import { resetForm } from './modules/resetForm';
import { searchStart } from './modules/searchStart';
import { validateInputCharacters } from './modules/validateInputCharacters';

window.addEventListener('DOMContentLoaded', () => {
  resetForm();
  autoNextInput();
  previousInput();
  searchStart();
  validateInputCharacters();
  inputControl();
});