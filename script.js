const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//table size 
canvas.width = 1000;
canvas.height = 500;
const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20; //ball size
let ballX = (cw/2 ); //start ball positionX 
let ballY = (ch/2 ); //start ball positionY

const racketHeight = 80; //racket height
const racketWidth = 15; //racket width
const playerX = 70; //player racket start positionX
const aiX  = 910; //computer racket start positionX
let playerY = 200; //player racket start positionY
let aiY = 200; //computer racket start positionY

let ballSpeedX = 1;//ball speedX
let ballSpeedY = 3;//ball speedY

//draw a player racket
function player(){
    ctx.fillStyle = "#b30000";
    ctx.fillRect(playerX, playerY+20, racketWidth, racketHeight);
}

//draw a computer racket
function computer(){
    ctx.fillStyle = "black";
    ctx.fillRect(aiX, aiY+20, racketWidth, racketHeight);
}

// draw a ball
function ball(){
    ctx.fillStyle = "orangered";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballY- ballSize/2 <= 0 || ballY + ballSize/2 >= ch){
        ballSpeedY = -ballSpeedY;
    }

    if (ballX - ballSize/2 <=0 || ballX + ballSize/2 >= cw){
        ballSpeedX = -ballSpeedX;
    }
}

//draw a table
function table(){
    //table 
    ctx.fillStyle = "#006622";
    ctx.fillRect(0,0,cw,ch);
    //line
    for(let i = 0; i < ch ; i+= 30){
        ctx.fillStyle = "white";
        ctx.fillRect(cw/2 - 1.5,i,3,20)
    }
}

function game(){
    table();
    ball();
    player();
    computer();
}


setInterval(game, 1000/60);