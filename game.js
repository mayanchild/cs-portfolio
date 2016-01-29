/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var box = {
    x: 219 ,
    y: 599,
    
    draw: function(){
        ctx.beginPath();
        ctx.rect(box.x,box.y,50,50);
        ctx.stroke();
    }
}




function gameloop(){
    ctx.beginPath();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
 
    
    
    box.draw()
    
    window.requestAnimationFrame(gameloop);
}
gameloop();

 window.addEventListener("keydown", moveSomething, true);
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // left key pressed
            moveSomething(left);
   
        case 39:
            // right key pressed
            moveSomething(right);

          
    }   
}

function gameloop(){
    ctx.beginPath();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    box.draw()
    box.moveSomething
    window.requestAnimationFrame(gameloop);
}
gameloop();
*/

var enemies = [];                                    
var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var blah = 5;
var box = {
    xPos: 240,
    yPos: 480,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    move: function(){
        console.log(box.goLeft);
        if(box.goLeft && box.xPos>0 ){
            box.xPos = box.xPos - 5;    
        }
        if(box.goRight && box.xPos<480){
            box.xPos += 5;    
        }
    
    
        console.log(box.xPos);
    },
    draw: function(){
        ctx.rect(box.xPos,box.yPos,20,20);
        ctx.stroke();
    }
};
// function spawn(){
// if(blah == 5){
//     setTimeout('',5000);
//     Enemy();
// }
// }

var wave1 = setInterval(function(){
    enemies.push(new Enemy( Math.floor(Math.random() * mycanvas.width ), 0))
},100)

function Enemy(xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = 30;
    this.height = 40;
    this.draw = function(){
        ctx.rect(this.xPos,this.yPos, 30, 40);        
        ctx.stroke();
    };
    this.moveDown = function(){
        this.yPos += 5;
    };
    
}

document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = true;
    }
    if(evt.keyCode === 38){
        box.goUp = true;
    }
    if(evt.keyCode === 39){
        box.goRight = true;
    }
    if(evt.keyCode === 40){
        box.goDown = true;        
    }    
    
});

document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = false;
    }
    if(evt.keyCode === 38){
        box.goUp = false;
    }
    if(evt.keyCode === 39){
        box.goRight = false;
    }
    if(evt.keyCode === 40){
        box.goDown = false;        
    }    
})


function gameLoop(){
    ctx.beginPath();
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    box.move();
    box.draw();
    for(var i = 0; i < enemies.length; i++){
        console.log(enemies.length)
        enemies[i].moveDown();
        enemies[i].draw();
    }
    
    
    window.requestAnimationFrame(gameLoop);
}
gameLoop();
