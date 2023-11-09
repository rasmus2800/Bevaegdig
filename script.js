
let y = 10; let r = 250; g = 200; b = 0;
let highscore = 0;
let point = 0;
let speed = 1;

function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(24);
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '10px';

    canvas.parent('#beholder');
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    parentDiv.insertBefore(canvas.elt, p);
}

setInterval(myTimer, 10000);

function myTimer() {
speed = 0.1 * (Math.floor(Math.random() * 9) + 3);
print(speed);
}

function draw() {
    background(r, g, b);
    strokeWeight(2);
    fill(230,230,230);
    ellipse(width / 2, height / 2, 100);
    strokeWeight(5);
    fill(230,0,230);
    if (speed > 0.69)
        fill(230,0,0)
    ellipse(width / 2, y, 50);
    
    if (accelerationX > 10){
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        y = y - 1.5;
    }
    else
        y = y + speed;

    if(y >= height || y <= 0){
        y = y - speed;
        if(point>0)
            point--;
    }
    if (y < height/2 + 50 && y > height/2 - 50){
        point++;
    }
    if(point>highscore){
        highscore = point;
    }

fill(0);
textSize(35);
if(speed>0.69)
    text('LØB!', width/2 - 60, height - 500);
textSize(20);
text('highscore:' + str(highscore), 25, height-50);
text('point:' + str(point),25, height-100);
}