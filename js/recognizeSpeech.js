window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const displayGuess = document.querySelector('#guess');
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    let guess = e.results[0][0].transcript;
    showGuess(guess);
    validateGuess(guess);
}

function showGuess(guess){
    displayGuess.innerHTML = 
    `<div>Você disse:</div>
        <span class="box-span">${guess}</span>
    
    `;
}

recognition.addEventListener('end', ()=>{
    recognition.start();
})