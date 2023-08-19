var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var arrow_image = new Image();
arrow_image.src = 'arrow.png';


var arrow = {
    x: 170,
    y: 110,
    width: 110,
    height: 85,
    draw() {
        ctx.drawImage(arrow_image, this.x, this.y, this.width, this.height)
    }
}


var timer = 0;

function actioneveryframe() {
    requestAnimationFrame(actioneveryframe)
    timer++;
    arrow.draw();
}


actioneveryframe();


var arrow_num = 0;


var arrowright = false;
document.addEventListener('keydown',function(e){
    if(arrow_num < 2) {
        if(e.code === 'ArrowRight'){
            arrowright = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            arrow.x += 490;
            arrow.draw();
            arrow_num ++;
            console.log(arrow_num);
        }
    }

})

var arrowleft = false;
document.addEventListener('keydown',function(e){
    if(arrow_num > 0) {
        if(e.code === 'ArrowLeft'){
            arrowright = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            arrow.x -= 490;
            arrow.draw();
            arrow_num --;
            console.log(arrow_num);
        }
    }
})

document.addEventListener('keydown',function(e){
    if(e.code === 'Enter'){
        if(arrow_num==0){
            location.href = '../Game_future_level/Game_future_level.html';
        }
        else if(arrow_num==1){
            location.href = '../Game_present_level/Game_present_level.html';
        }
        else if(arrow_num==2){
            location.href = '../Game_past_level/Game_past_level.html';
        }
    }
})


