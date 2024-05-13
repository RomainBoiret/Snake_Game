const game = document.querySelector(".game");

const cols = 30;
const rows = 30;

let gameOff = false;
let setIntervalID;
let snakeBody = [];

let newFoodX = 0;
let newFoodY = 0;

let snakeX = 5;
let snakeY = 15;

let stepX = 0;
let stepY = 0;

function generateFood()
{
    newFoodX = Math.floor(Math.random() * cols) + 1;
    newFoodY = Math.floor(Math.random() * rows) + 1;
}

function addFood()
{
    let newFood = `<div class="food" style="grid-area: ${newFoodY} / ${newFoodX}"></div>`;

    return newFood;
}

function initSnake()
{
    for (let i = snakeBody.length - 1; i > 0; i--)
    {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    snakeX += stepX;
    snakeY += stepY;

    if (snakeX <= 0 || snakeX > cols || snakeY <= 0 || snakeY > rows)
    {
        gameOff = true;
    }

    let snake = "";

    for (let i = 0; i < snakeBody.length; i++)
    {
        snake += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // if (i !== 0 && snakeBody)
    }

    return snake;
}

function colision()
{
    generateFood();
    snakeBody.push([newFoodX, newFoodY]);
}

function initGame()
{
    if (gameOff)
        return gameOver();

    if (newFoodX === snakeX && newFoodY === snakeY)
        colision();

    game.innerHTML = addFood() + initSnake();
}

function gameOver()
{
    clearInterval(setIntervalID);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

function controlers(e)
{
    switch(e.key)
    {
        case "ArrowUp": case "w":
            if (stepY != 1)
            {
                stepX = 0;
                stepY = -1;
            }
            break;
        case "ArrowDown": case "s":
            if (stepY != -1)
            {
                stepX = 0;
                stepY = 1;
            }
            break;
        case "ArrowLeft": case "a":
            if (stepX != 1)
            {
                stepX = -1;
                stepY = 0;
            }
            break;
        case "ArrowRight": case "d":
            if (stepX != -1)
            {
                stepX = 1;
                stepY = 0;
            }
            break;
    }
}

function startGame()
{
    // Ajouter nourriture
    generateFood();

    // Initialiser la partie
    setIntervalID = setInterval(initGame, 130);

    // Gerer les touches
    document.addEventListener("keydown", controlers);
}
