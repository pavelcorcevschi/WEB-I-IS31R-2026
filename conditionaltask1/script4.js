const input = document.getElementById('dayInput');
const button = document.getElementById('checkDayBtn');
const result = document.getElementById('dayResult');

button.addEventListener('click', function() {
    const dayNumber = parseInt(input.value);
    let dayName;

    // Используем switch для выбора дня
    switch (dayNumber) {
        case 1:
            dayName = "Понедельник";
            break;
        case 2:
            dayName = "Вторник";
            break;
        case 3:
            dayName = "Среда";
            break;
        case 4:
            dayName = "Четверг";
            break;
        case 5:
            dayName = "Пятница";
            break;
        case 6:
            dayName = "Суббота";
            break;
        case 7:
            dayName = "Воскресенье";
            break;
        default:
            dayName = "Ошибка! Введите число от 1 до 7.";
    }

    // Выводим результат на страницу
    result.innerText = dayName;
});