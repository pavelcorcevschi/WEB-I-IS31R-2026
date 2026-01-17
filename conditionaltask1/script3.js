// Находим элементы
const input = document.getElementById('scoreInput');
const button = document.getElementById('checkBtn');
const result = document.getElementById('result');

// Функция проверки
function checkGrade() {
    const score = parseInt(input.value);

    // Валидация (проверка на число)
    if (isNaN(score)) {
        result.innerText = "Пожалуйста, введите число";
        return;
    }

    // Условная конструкция
    if (score >= 90) {
        result.innerText = "Отлично (A)";
    } else if (score >= 75) {
        result.innerText = "Хорошо (B)";
    } else if (score >= 50) {
        result.innerText = "Средне (C)";
    } else {
        result.innerText = "Требует улучшения (D/F)";
    }
}

// Привязываем функцию к клику по кнопке
button.addEventListener('click', checkGrade);