const inputField = document.getElementById('inputField');
const charCount = document.getElementById('charCount');

inputField.addEventListener('input', function () {
  charCount.textContent = inputField.value.length;
});
