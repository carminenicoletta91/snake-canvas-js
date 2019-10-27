let canvas = document.getElementById("moon");
let cxt = canvas.getContext("2d");
let keybord = document.querySelector("body");
let updownbool = false;

class Vect2d { //class to create vectors 2d
    constructor(x, y, wt, ht) {
        this.set(x, y, wt, ht);
    }
    set(x, y, wt, ht) {
        this.x = x;
        this.y = y;
        this.wt = wt;
        this.ht = ht;
    }
}
class Entity { //class to create the actors of the game
    constructor(x, y, wt, ht) { //x position , y position ,wt width,ht height
        this.act = new Vect2d(x, y, wt, ht);

    }
    update() {

    }
    draw(context) {
        cxt.fillStyle = "green";
        cxt.fillRect(this.act.x, this.act.y, this.act.wt, this.act.ht);
    }

}

let snake = new Entity(50, 50, 30, 10);
let widthsnk = snake.act.wt;
let heigthsnk = snake.act.ht;

// let food = new Entity()
keybord.onkeypress = function(e) {
    let charcode = e.which;


    if (charcode === 100) { //pres d move left

        if (updownbool === true) {
            snake.act.wt = widthsnk;
            snake.act.ht = heigthsnk;
            console.log("before", snake.act.x);

            console.log("after", snake.act.x);
        }
        console.log(snake.act.x, snake.act.y);

        snake.act.x += 5;
        updownbool = false;
    } else if (charcode === 97) { //press a move rigth

        if (updownbool === true) {
            snake.act.wt = widthsnk;
            snake.act.ht = heigthsnk;
            console.log("before", snake.act.x);

            snake.act.x = snake.act.x - (heigthsnk * 2);
            console.log("after", snake.act.x);

        }
        console.log(snake.act.x, snake.act.y);
        snake.act.x -= 5;
        updownbool = false;
    } else if (charcode === 119) { // press w move up
        if (updownbool === false) {

            snake.act.wt = heigthsnk;
            snake.act.ht = widthsnk;
            snake.act.y = snake.act.y - 20;

        }
        console.log(snake.act.x, snake.act.y);
        snake.act.y -= 5;
        updownbool = true;
    } else if (charcode === 115) { // press s move down

        if (updownbool === false) {

            snake.act.wt = heigthsnk;
            snake.act.ht = widthsnk;


            updownbool = true;
        }
        console.log(snake.act.x, snake.act.y);
        snake.act.y += 5;


    }

}


function drawScreen() { //clean the screen
    cxt.fillStyle = "white";
    cxt.fillRect(0, 0, canvas.width, canvas.height);
}

function Gameloop() { //


    drawScreen();


    snake.draw(cxt)

    requestAnimationFrame(Gameloop);



}

Gameloop();