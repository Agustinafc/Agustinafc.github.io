let numeroA= Math.floor(Math.random() *100)+1;

const guesses=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');

const guessSubmit=document.querySelector('.GuessSubmit');
const guessField=document.querySelector('.guessField');
let guessCount=1;
let ResetButton;
function checkGuess(){
    let userGuess =Number(guessField.value);
 if(guessCount===1){
     guesses.textContent= 'intentos anteriores:';
 }    
 guesses.textContent += userGuess+'';

 if (userGuess=== numeroA) {
     lastResult.textContent='Felicidades lo adivinaste';
     lastResult.style.backgroundColor='green';
     lowOrHi.textContent='';
     setGameOver();

     
 } else if (guessCount===10) {
     lastResult.textContent='Fin del juego';
     setGameOver();
     
 } else {
     lastResult.textContent='Incorrecto';
     lastResult.style.backgroundColor='red';
     if(userGuess<numeroA){
         lowOrHi.textContent='El numero es muy bajo';
     }else if(userGuess>numeroA){
         lowOrHi.textContent='El numero es muy grande';

     }
    }
guessCount++;
guessField.value=''
guessField.focus();
     }
     
 
     
 
