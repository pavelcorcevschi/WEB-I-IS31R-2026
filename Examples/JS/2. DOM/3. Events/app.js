document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.body.style.backgroundColor = "lightblue";
    }, 5000);

    const colors = ["red", "green", "blue", "yellow", "purple"];
    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 20000);


    const clickmeButton = document.getElementById('clickmeBtn');
    clickmeButton.addEventListener('click', function() {
        alert('Button clicked!');
    });

    const hidemeButton = document.getElementById('hidemeBtn');
    hidemeButton.addEventListener('click', function() {
        this.style.display = 'none';
    });

    const clonmeButton = document.getElementById('clonemeBtn');
    clonmeButton.addEventListener('click', function() {
        const clone = this.cloneNode(true);
        clone.id = ''; // Remove id to avoid duplicates
        this.parentNode.appendChild(clone);
    });

    const nameInput = document.getElementById('name');
    nameInput.addEventListener('input', function() {
        const name = nameInput.value;
        document.getElementById('reversedName').innerText = name.split('').reverse().join('');
    })

    const mario = document.getElementById('mario');

    document.addEventListener('keydown', function(event) {
        
        if(event.key === 'ArrowUp') {
            mario.style.top = (mario.offsetTop - 10) + 'px';
        } else if(event.key === 'ArrowDown') {
            mario.style.top = (mario.offsetTop + 10) + 'px';
        } else if(event.key === 'ArrowLeft') {
            mario.style.left = (mario.offsetLeft - 10) + 'px';
        } else if(event.key === 'ArrowRight') {
            mario.style.left = (mario.offsetLeft + 10) + 'px';
        }
    });
});