
window.addEventListener('load', init);
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

const currentLevel = levels.easy;

let isPlaying;
let score = 0;
// let time = 5;
let time = currentLevel;

const currentWord = document.querySelector('#current-word');
const message = document.querySelector('#message');
const scoreDisplay = document.querySelector('#score');
const seconds = document.querySelector('#seconds');
const timeDisplay = document.querySelector('#time');
const wordInput = document.querySelector('#word-input');

const words = [
    'book',
    'cat',
    'cream',
    'door',
    'dream',
    'drink',
    'egg',
    'employee',
    'engage',
    'family',
    'fan',
    'fantasy',
    'friend',
    'girl',
    'good',
    'health',
    'house',
    'heart',
    'ink',
    'jam',
    'javascript',
    'joker',
    'jumper',
    'love',
    'mirror',
    'neat',
    'open',
    'sweet'

];

function checkStatus(){
    if(!isPlaying && time=== 0){
        message.innerHTML = 'Game Over!!!';
        score = -1
    }
}

function countDown(){
    if (time > 0 ){
        time --;
    }else if(time===0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function init(){
    //console.log('init');
    showWord(words);

    wordInput.addEventListener('input', startMatch);

    setInterval(countDown, 1000);

    setInterval(checkStatus, 50);
}
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        //  time = 6;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;

    }else{
        scoreDisplay.innerHTML = score;
    }
}

function showWord(words){
    const randIndex = Math.floor(Math.random()* words.length);
    currentWord.innerHTML = words[randIndex];
}