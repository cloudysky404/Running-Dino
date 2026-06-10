let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
};


let cactusInterval;

let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;


let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

let velocityX = -8;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;
let score = 0;

let highScore = localStorage.getItem("highScore");
highScore = highScore ? Number(highScore) : 0;

let isDucking = false;

window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;

    context = board.getContext("2d");

    dinoImg  = new Image();
    dinoImg.src = "./dino.png";

    cactus1Img = new Image();
    cactus1Img.src = "./cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "./cactus2.png";

    cactus3Img = new Image();
    cactus3Img.src = "./cactus3.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);

    document.addEventListener("keydown", moveDino);
    document.addEventListener("keyup", stopDuck);
};


function update() {
    requestAnimationFrame(update);

    if (gameOver) {
        context.fillStyle = "red";
        context.font = "30px Courier";
        context.fillText("GAME OVER", 250, 120);
        return;
    }

    context.clearRect(0, 0, board.width, board.height);

    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);

    if (isDucking) {
        context.drawImage(
            dinoImg,
            dino.x,
            dino.y + 40,
            dino.width,
            dino.height
        );
    } else {
        context.drawImage(
            dinoImg,
            dino.x,
            dino.y,
            dino.width,
            dino.height
        );
    }

    for (let i =  0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x += velocityX;
        context.drawImage(
            cactus.img, 
            cactus.x,
            cactus.y,
            cactus.width,
            cactus.height
        );

        if (detectCollision(dino, cactus)){
            console.log(
                "Dino:",
                dino.x,
                dino.y,
                dino.width,
                dino.height
            );

            console.log(
                "Cactus:",
                cactus.x,
                cactus.y,
                cactus.width,
                cactus.height
            );
            gameOver = true;
        }
    }

    score++;

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }

    context.fillStyle = "black";
    context.font = "20px Courier";
    context.fillText("Score: " + score, 5, 20);
    context.fillText("Best: " + highScore, 5, 45);
}



function moveDino(e) {
    if (gameOver) return;

    if (
        (e.code === "Space" || e.code === "ArrowUp") &&
        Math.abs(dino.y - dinoY) < 1
    ) {
        console.log("Jump!", dino.y);
        velocityY = -10;
    }

    if (e.code === "ArrowDown") {
        isDucking = true;
    }
}



function stopDuck(e) {
    if (e.code === "ArrowDown") {
        isDucking = false;
    }
}



function placeCactus() {
    if (gameOver) return;

    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    };

    let chance = Math.random();

    if(chance > 0.90) {
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
    } else if (chance > 0.70) {
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
    } else if (chance > 0.50) {
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
    } else {
        return;
    }

    cactusArray.push(cactus);

    if (cactusArray.length > 5) {
        cactusArray.shift();
    }
}



function detectCollision(a, b) {
    return (
        a.x + 15 < b.x + b.width &&
        a.x + a.width - 15 > b.x &&
        a.y + 10 < b.y + b.height &&
        a.y + a.height - 10 > b.y
    );
}



function restartGame() {
    gameOver = false;
    score = 0;
    cactusArray = [];

    dino.x = dinoX;
    dino.y = dinoY;

    velocityY = 0;
    isDucking = false;

    clearInterval(cactusInterval);

    cactusInterval = setInterval(placeCactus, 1000);
}