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
class Circle {
    constructor(x, y, r) {
        this.set(x, y, r);
    }
    set(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;

    }

}
class EntityCircle {
    constructor(x, y, r) {
        this.act = new Circle(x, y, r);
        this.dx = 1;
        this.dy = 1;
    }
    draw(context) {
        cxt.beginPath();
        cxt.arc(this.act.x, this.act.y, this.act.r, 0, 2 * Math.PI);
        cxt.fillStyle = "yellow";
        cxt.fill();

        cxt.strokeStyle = "black";
        cxt.stroke();
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


let food = new EntityCircle(300, 100, 4);
// console.log(food, "Mangiaree");

keybord.onkeypress = function(e) {
    let charcode = e.which;


    if (charcode === 100) { //pres d move right

        if (updownbool === true) {
            snake.act.wt = widthsnk;
            snake.act.ht = heigthsnk;
            console.log("before", snake.act.x);

            console.log("after", snake.act.x);
        }
        console.log(snake.act.x, snake.act.y);

        snake.act.x += 5;
        updownbool = false;
    } else if (charcode === 97) { //press a move left

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



function ChangePositionFood(food) {



    let numberx = Math.random() * 750;
    let numbery = Math.random() * 550;


    food.act.x = numberx; //new position x
    food.act.y = numbery; //new position y

}



function drawScreen() { //clear the screen
    cxt.fillStyle = "white";
    cxt.fillRect(0, 0, canvas.width, canvas.height);
}



let timefood = 0;

function Gameloop() { //
    timefood++;
    requestAnimationFrame(Gameloop);

    drawScreen();


    if (timefood === 300) { //every 5 seconds it changes 300/60framesec;
        ChangePositionFood(food);
        timefood = 0;
    }
    food.draw();
    snake.draw(cxt);






}

Gameloop();