const ageInput = document.getElementById('ageInput');
const ageBtn = document.getElementById('btn2');
const ageRes = document.getElementById('res2');

ageBtn.addEventListener('click', function() {
    const age = parseInt(ageInput.value);

    if (isNaN(age)) {
        ageRes.innerText = "Укажите возраст";
        return;
    }

    // Логика совершеннолетия
    if (age >= 18) {
        ageRes.innerText = "Вы совершеннолетний";
    } else {
        ageRes.innerText = "Вы еще несовершеннолетний";
    }
});