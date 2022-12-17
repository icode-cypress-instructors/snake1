import{
    update as updateSnake,                  //renaming imported functions using as
    draw as drawSnake,
    SNAKE_SPEED,
    getSnakeHead,
    snakeIntersection,
} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import {outsideGrid} from "./grid.js";

let lastRenderTime=0; 
let gameOver =false;
const gameBoard = document.getElementById("game-board");

function main(currentTime){
    if(gameOver){
        if(confirm("You lost. Press ok to restart.")){  //if press ok on pop-up, reset window
            window.location = "/";
        }
        return;
    }
    window.requestAnimationFrame(main);                              //************
    const secondSinceLastRender = (currentTime-lastRenderTime)/1000; // 
    if(secondSinceLastRender<1 / SNAKE_SPEED) return;                //
                                                                     //
    lastRenderTime = currentTime;                                    // GAME LOOP
                                                                     //   
    update();                                                        //
    draw();                                                          //
}                                                                    //************ 

window.requestAnimationFrame(main); //calls main function on every frame

function update(){  //overall general update function
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){    //overall general draw function, ie main graphics
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){  //snake death upon grid exit or intersection with itself
    gameOver = outsideGrid(getSnakeHead())||snakeIntersection();
}