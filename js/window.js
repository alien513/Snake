let btnRestartGame = document.getElementById('btnRestartGame');
let btnReloadGame = document.getElementById('btnReloadGame');


/*модальне для програшу*/
function endGame() {
    let endGameBlock = document.querySelector(".end-game");
    endGameBlock.classList.remove('hidden');

    gameBlockSnake.className  = 'hidden'; //приховала поле
    gameBlockFood.className  = 'hidden'; //приховала поле

    // Додала звук програшу, та очищення інтервалу, щоб звук не повторювався
    dead();
    clearInterval(intervalId);
    intervalId = null;

    //додавання результату до модального вікна
    let endGameText = document.querySelector("#endGameText");
    endGameText.textContent = "Твій результат: " + score;
}
btnRestartGame.onclick = function() {
    location.reload();  //перезапуск гри
}

/*модальне для виграшу*/
function winGame() {
    let winGameBlock = document.querySelector(".win-game");
    winGameBlock.classList.remove('hidden');

    winSound();
    gameBlockSnake.className  = 'hidden';
    gameBlockFood.className  = 'hidden'; //приховала поле
    clearInterval(intervalId);
    intervalId = null;

    //додавання результату до модального вікна
    let winGameText = document.querySelector("#winGameText");
    winGameText.textContent = "Твій результат: " + score;
}

btnReloadGame.onclick = function() {
    location.reload(); //перезапуск гри
}

/*ПРАВИЛА*/
let btnOpenRules = document.querySelector("#rules");
let condition = document.querySelector("#condition")

btnOpenRules.onclick = function(){
    condition.className = "condition isActive";
    modal.style.display = 'none';
}

let btnRulesClose = document.querySelector("#condition .close")
btnRulesClose.onclick = function(){
    condition.className = "condition";
    modal.style.display = 'block';

}