function validateGuess(guess){
    const number = +guess;

    if(verifyIsNumber(number)){
        displayGuess.innerHTML += '<div>Valor Inválido: você não falou um número</div>';
        return;
    }else{
        if(verifyNumberLength(number)){
            displayGuess.innerHTML += `<div>Valor Inválido: O número secreto está entre ${lowerValue} e ${higherValue}</div>`;
            return;
        }
    }

   

    if(number === secretNumber){
        document.body.innerHTML = `
        <div><h2>Você acertou!</h2></div>
        <div><h3>O número secreto era ${secretNumber}</h3></div>

        <div><button id="play-again" class="btn-play">Jogar Novamente</button></div>
        `;
        
    } else if(number > secretNumber){
        displayGuess.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>';
        return;
    } else {
        displayGuess.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>';
        return;
    }
    

}
function verifyIsNumber(number) {
    return isNaN(number);
}

function verifyNumberLength(guess) {
    return guess > higherValue || guess < lowerValue;
}

document.body.addEventListener('click', (e)=>{
    if(e.target.id === "play-again"){
        window.location.reload();
    }
});