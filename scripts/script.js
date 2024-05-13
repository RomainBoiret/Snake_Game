const game = document.getElementById('game');

let cols = 20;
let rows = 16;

let snakeBody = [];

// Création de la grille
function generateGrid()
{
    for (let i = 0; i < rows; i++) 
    {
        for (let j = 0; j < cols; j++) 
        {
            let cell = document.createElement('div');
    
            cell.classList.add('cell');
            cell.setAttribute('data-x', j);
            cell.setAttribute('data-y', i);
    
            game.appendChild(cell);
        }
    }
}
  
// Ecoute des clics sur les cellules
game.addEventListener('click', (event) => {

    if (event.target.classList.contains('cell')) 
    {
        let x = event.target.getAttribute('data-x');
        let y = event.target.getAttribute('data-y');

        console.log(`Coordonnées de la cellule : x = ${x}, y = ${y}`);
    }
});

function addFood()
{
    let x = Math.floor(Math.random() * cols);
    let y = Math.floor(Math.random() * rows);

    let cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

    let newFood = document.createElement('div');

    newFood.classList.add('food');

    cell.appendChild(newFood);
}

function initSnake()
{
    
}

function startGame()
{
    // Générer la grille
    generateGrid();

    // Créer le snake
    initSnake()

    // Ajouter nourriture
    addFood();
}