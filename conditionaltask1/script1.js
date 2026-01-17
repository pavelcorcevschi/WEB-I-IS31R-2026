const input = document.getElementById('numInput');
const button = document.getElementById('btn1');
const result = document.getElementById('res1');

button.addEventListener('click', function() {
    const num = parseFloat(input.value);

    if (isNaN(num)) {
        result.innerText = "Введите число";
    } else if (num > 0) {
        result.innerText = "Положительное";
    } else {
        result.innerText = "Неположительное";
    }
});