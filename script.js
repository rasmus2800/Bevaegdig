// bemærk hvis man skal oprette flere canvas og køre ikke-global mode
// https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
// https://www.youtube.com/watch?v=Su792jEauZg
// derman kan man oprette instans som objekt, hvori sketchen kører
// Og man kan oprette flere canvas med samme sketch eller
// forskellige sketches i forskellige canvas
// instans mode skal closure på variable - namespacing - vs global mode med globale variable

// tilføj knapper, og tilføj eventlistener til knappen, funktionskald
// 10 spring til siden hurtigt nok - gør baggrunden helt hvid...

let y = 10; let r = 300; g = 180; b = 0;
let highscore = 0;
let point = 0;
let speed = 1;

function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    parentDiv.insertBefore(canvas.elt, p);
}

setInterval(myTimer, 10000);

function myTimer() {
speed=Math.random();
print(speed);
}

function draw() {
    background(r, g, b);
    strokeWeight(10);
    ellipse(width / 2, y, 50);

    if (accelerationX > 10){
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        y--;
    }
    else
        y=y+speed;
    if(y>=height||y<=0){
        y=y-speed;
        if(point>0)
            point--;
    }
    if (y<height/2+25&&y>height/2-25){
        point++;
    }
    if(point>highscore){
        highscore=point;
    }
text('highscore:' + str(highscore), 25, height-50);
text('point:' + str(point),25, height-100);
}