let modal = document.querySelector(".start-game");// модальне вікно старту гри
let gameBlockSnake = document.querySelector('.wrapperSnake'); // ігрове поле
let gameBlockFood = document.querySelector('.wrapperFood'); // ігрове поле
let startButton = document.querySelector("#btnStartGame");// кнопка старту

startButton.onclick = function () {   //!!!ТУТ ВИПРАВИЛА!!!! запуск не через функцію, а завдяки кліку по кнопці

      modal.style.display = 'none';//скрыть модальное окно
      btnOpenRules.style.display = 'none'; //скрыть кнопку правила
    //   Замінила display на ClassName бо так тоді відображається вікно з програшем чи виграшем
      gameBlockSnake.className = 'wrapperSnake'; // отобразить игровое поле
      gameBlockFood.className = 'wrapperFood'; // отобразить игровое поле

      backgroundSound();
      // Додала функцію для створення змійки
      createFood();
      createSnake(0,0,0,"down");

};