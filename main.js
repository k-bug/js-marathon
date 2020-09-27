const $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function () {
    console.log('Kick')
    changeHP(randome(20), character);
    changeHP( randome(20), enemy);
})

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP (person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP (person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP (count, person) {
    if (person.damageHP < count) {
        person.damageHP;

        alert('Бедный ' + person.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}

function randome (num) {
    return Math.ceil(Math.random() * num);
}

init();
