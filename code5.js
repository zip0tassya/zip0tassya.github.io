const btn1 = document.getElementById('pig');
const btn2 = document.getElementById('horse');

const speak = function() {
    alert(this.sound + '! Меня зовут ' + this.name + '.');
}

let pig = {
    sound: 'Хрю',
    name: 'Владимир',
    speak: speak
}

let horse = {
    sound: 'Иго-го',
    name: 'Артист',
    speak: speak
}

btn1.addEventListener('click', function() {
    pig.speak();
});
btn2.addEventListener('click', function() {
    horse.speak();
});