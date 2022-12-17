import {onSnake,expandSnake} from "./snake.js"; //importing variables and function from other files
import {randomGridPosition} from "./grid.js";

let food = getRandomFoodPosition();

const EXPANSION_RATE=  1; 

export function update(){
    if(onSnake(food)){      //if the snake head is on food
        expandSnake(EXPANSION_RATE);    //expand snake by 1
        food = getRandomFoodPosition(); //place next food at new random position
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement("div");  //creating new div for food
    foodElement.style.gridRowStart = food.y;            //setting its x position
    foodElement.style.gridColumnStart = food.x;         //setting  its y position
    foodElement.classList.add("food");                  //adding a class of food
    gameBoard.appendChild(foodElement);                 //appending it as a child to gameBoard
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition ==null||onSnake(newFoodPosition)){    //if there is no new food position
        newFoodPosition = randomGridPosition();                 //or the new food position is on
    }                                                           //the snake, create a new random
    return newFoodPosition;                                     //food position
}