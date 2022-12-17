import { getInputDirection } from "./input.js"; //imports getInputDirection() from input.js
export const SNAKE_SPEED =5; //global variable to set snake speed

const snakeBody=[{x:11,y:11}]; //establishes initial position of the snake on the grid

let newSegments =0; //sets newSegments initially at 0

const scoreBoard = document.getElementById("score"); //accesses #score from index.html

export function update(){
    addSegments();//on every update, adds segment if newSegment>0

    const inputDirection = getInputDirection();
    for(let i = snakeBody.length -2; i>=0; i--){
        snakeBody[i+1]= {...snakeBody[i]}; //spread operator: numerically deletes tail and adds head to snake to simulate movement
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
    scoreBoard.innerHTML = "Score: " + snakeBody.length; //keeps the score consistently equal to snake length

}

export function draw(gameBoard){
    snakeBody.forEach((segment)=>{ //drawing each piece of the snake, ie the forEach loop
        const snakeElement = document.createElement("div"); // creating new HTML element div
        snakeElement.style.gridRowStart = segment.y; 
        snakeElement.style.gridColumnStart = segment.x; 
        snakeElement.classList.add("snake"); //  adding a new class to HTML element snakeElement
        gameBoard.appendChild(snakeElement); //places each snakeElement <div> inside #game-board
    });
}

export function expandSnake(amount){ //numerically expands snake
    newSegments+=amount; 
}

export function onSnake(position, {ignoreHead=false}={}){ //return true or false if snake is as designated position
    return snakeBody.some((segment,index)=>{            //checks all segments
        if(ignoreHead&&index===0) return false;
        return equalPositions(segment,position);
    });
}

export function getSnakeHead(){ //returns position of snakeHead
    return snakeBody[0];
}

export function snakeIntersection(){//checks if two parts of snake have touched eachother
    return onSnake(snakeBody[0],{ignoreHead:true});
}

function equalPositions(pos1,pos2){//checks if two elements are at equal position, parts of snake or snake and food
    return pos1.x === pos2.x && pos1.y === pos2.y; 
}

export function addSegments(){//handles the constant length of snake, increases when newSegments>0
    for(let i =0; i <newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});//pushes new element onto snake array
    }
    newSegments=0; //always resets newSegments to 0
}