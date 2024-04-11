const input = document.getElementById('input');
const numberButtons = document.querySelectorAll('#num');
const symbolButtons = document.querySelectorAll('#sym');
const resetButton = document.getElementById('reset');
const removeButton = document.getElementById('remove');
const resultButton = document.getElementById('result');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent;
    });
});

symbolButtons.forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent;
    });
});

resetButton.addEventListener('click', () => {
    input.value = '';
});

removeButton.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});

resultButton.addEventListener('click', () => {
    const result = eval(input.value);
    input.value = result;
});
