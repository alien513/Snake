// **********Рух змійки********

let intervalId = null; // Ідентифікатор інтервалу
let step = 25; // Скільки пікселів пройде за "крок"
let moving = false;
let playerCreated = false;

let score = 0;
let snakeArray = [];
snakeArray[0] = {
   x: 0,
   y: 0
}
let food;
let dir;

let scoreBlock = document.querySelector("#score");
let foodImg = document.createElement('div');

// Керування змійкою
document.onkeydown = function (event) {
   if (playerCreated) {// перевірка на створення гравця
      if (!moving) {
         // Запуск руху змійки, тільки якщо вона ще не рухається
         moving = true;
         startMoving();
      }
      // Обираємо напрямок
      if ((event.code == "ArrowLeft" || event.code == "KeyA") && (dir != "right")) {
         dir = "left";
      } else if ((event.code == "ArrowRight" || event.code == "KeyD") && (dir != "left")) {
         dir = "right";
      } else if ((event.code == "ArrowUp" || event.code == "KeyW") && (dir != "down")) {
         dir = "up";
      } else if ((event.code == "ArrowDown" || event.code == "KeyS") && (dir != "up")) {
         dir = "down";
      }
   }
}

// Перевірка чи не врізалася змійка в себе
function eatTail(head, rest) {
   for (let i=0; i<rest.length; i++) {
      if (head.x == rest[i].x && head.y == rest[i].y) {
         endGame();
      }
   }
}

// Основна функція руху змійки
function moveSnake() {
   // Очищуємо ігрове поле
   for (let i = gameBlockSnake.childNodes.length - 1; i >= 0; i--) {
      gameBlockSnake.removeChild(gameBlockSnake.childNodes[i]);
   }

   // Перемальовуємо змійку
   for (let i=0; i<snakeArray.length; i++) {
      createSnake(snakeArray[i].x,snakeArray[i].y,i,dir);
   }

   // Зберігаємо старі координати
   let snakeX = snakeArray[0].x;
   let snakeY = snakeArray[0].y;

   // Змійка їсть фрукт
   if (snakeX == food.x && snakeY == food.y) {
      score++;
      scoreBlock.innerText = score;

      eatingSound();

      food = {
         x: Math.floor(Math.random() * 19 + 1) * step,
         y: Math.floor(Math.random() * 19 + 1) * step
      }
      foodImg.style.top = food.y + "px";
      foodImg.style.left = food.x + "px";
   } else {
      snakeArray.pop();
   }

   if (dir == "left") snakeX -= step;
   if (dir == "right") snakeX += step;
   if (dir == "up") snakeY -= step;
   if (dir == "down") snakeY += step;

   // Перевіряємо рахунок
   if (score == 20) {
      winGame();
   } else {
      // Перевіряємо, чи не врізалася змійка у стіну
      if (snakeX >= 0 && snakeX <= gameBlockSnake.offsetWidth &&
      snakeY >= 0 && snakeY <= gameBlockSnake.offsetHeight)
      {
      // Якщо все ок, зберігаємо голову з новими координатами
         let newHead = {
            x: snakeX,
            y: snakeY
         }

         // Перевіряємо, чи не врізалася змійка сама в себе
         eatTail(newHead,snakeArray);
         // Додаємо нову голову до масиву
         snakeArray.unshift(newHead);
      } else {
         endGame();
      }
   }
}

function startMoving() {
   if (!intervalId) {
      intervalId = setInterval(moveSnake, 300); // Змінюючи значення інтервалу, можна змінити швидкість руху змійки
   }
}

// Створення змійки
function createSnake(x,y,i) {
   playerCreated = true;
   let snake = document.createElement('div');
   // Отримання значення обраної радіо-кнопки з елемента з класом "skins"
   let selectedRadio = document.querySelector('.skins input[type="radio"]:checked');
   let skin = selectedRadio ? selectedRadio.value : '';

   // Перевірка, що значення скіну отримано
   if (skin) {
      if (i==0) {
         snake.className = `snake head-${skin}`; // Встановлення класу з обраним скіном голови
         switch (dir) {
            case "left":
               snake.style.transform = "rotate(-90deg)";
               break;
            case "right":
               snake.style.transform = "rotate(90deg)";
               break;
            case "up":
               snake.style.transform = "rotate(180deg)";
               break;
            case "down":
               snake.style.transform = "rotate(0deg)";
               break;
         }

      } else {
         snake.className = `snake body-${skin}`; // Встановлення класу з обраним скіном тулуба
      }
   }
   snake.style.top = y + "px";
   snake.style.left = x + "px";
   gameBlockSnake.appendChild(snake);
}

function createFood() {
   food = {
      x: Math.floor(Math.random() * 19 + 1) * step,
      y: Math.floor(Math.random() * 19 + 1) * step
   }
   foodImg.className = "apple";
   foodImg.style.top = food.y + "px";
   foodImg.style.left = food.x + "px";
   gameBlockFood.appendChild(foodImg);
}