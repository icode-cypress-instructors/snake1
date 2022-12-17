let inputDirection = {x:0,y:0};

let lastInputDirection = {x:0,y:0};

window.addEventListener("keydown",(e)=> {// checking for previous movement to determine validity of next movement
    switch(e.key){
        case "ArrowUp":
            if(lastInputDirection.y !== 0)break;
            inputDirection = {x:0, y:-1}; 
            break;
        case "ArrowDown":
            if(lastInputDirection.y!==0)break;
            inputDirection = {x:0,y:1}
            break;
        case "ArrowLeft" :
            if(lastInputDirection.x !==0)break;
            inputDirection = {x:-1,y:0};
            break;
        case "ArrowRight":
            if(lastInputDirection.x!==0)break;
            inputDirection = {x:1,y:0};
            break;
    }
});

export function getInputDirection(){//getting the most recent movement and returning it.
    lastInputDirection = inputDirection;
    return inputDirection; 
}