'use strict';
window.addEventListener('load', init, false);

function init() {
    console.log('init');
    var canvas = document.createElement('canvas');
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    // document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.style.background = AppColors().mybackground;
    var context = canvas.getContext('2d');

    let grid = Grid(Vector(0, 0), window.innerWidth, 200, 40, AppColors().mycreme, context);
    let ball = Ball(Vector(50, 75), 30, AppColors().myred, context);
    var circle = Circle(Vector(120, 75), 25, true, AppColors().myred, true, AppColors().mylightblue, 10, context);
    var ellipse = Ellipse(Vector(195, 75), 30, 20, 0, true, AppColors().mycreme, true, AppColors().myred, 10, context);
    var triangle = Triangle(Vector(260, 75), 50, AppColors().lightblue, context);
    var box = Box(Vector(300, 50), 50, AppColors().myred, context);
    var rectangle = Rectangle(Vector(370, 55), 60, 40, true, AppColors().red, true, AppColors().lightblue, 10, context);
    var line = Line(Vector(450, 60), Vector(490, 90), 10, 'round', AppColors().red, context);
    let text = new Text(Vector(40, 140), 30, 'Canvas', 'white', context);

    let sball = new SBall(Vector(200, 100), 50, AppColors().red);


}

function addInstrucctions() {
    var div = document.createElement('div');
    document.body.appendChild(div);

    var h1 = document.createElement('h1');
    h1.innerHTML = 'Instructions'
    div.appendChild(h1);

    var p = document.createElement('p');

    var h4 = document.createElement('h4');
    h4.innerHTML = 'Creating a ball'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var ball = <b>Ball</b>(position:<b>Vector</b>, radius:<b>number</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating a circle'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var< circle = <b>Circle</b>(position:<b>Vector</b>, radius:<b>number</b>, hasFill:<b>boolean</b>, fillColor:<b>string</b>, hasStroke:<b>boolean</b>, strokeColor:<b>string</b>, lineWidth:<b>number</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an ellipse'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var ellipse = <b>Ellipse</b>(position:<b>Vector</b>, radiusX:<b>number</b>, radiusY:<b>number</b>, rotation:<b>number</b>, hasFill:<b>boolean</b>, fillColor:<b>string</b>, hasStroke:<b>boolean</b>, strokeColor:<b>string</b>, lineWidth:<b>number</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an triangle'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var triangle = <b>Triangle</b>(position:<b>Vector</b>, size:<b>number</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an box'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var box = <b>Box</b>(position:<b>Vector</b>, size:<b>number</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an rectangle'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var rectangle = <b>Rectangle</b>(position:<b>Vector</b>, width:<b>number</b>, height:<b>number</b>, hasFill:<b>boolean</b>, fillColor:<b>string</b>, hasStroke:<b>boolean</b>, strokeColor:<b>string</b>, lineWidth:<b>number</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an line'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var line = <b>Line</b>(x1:<b>number</b>, y1:<b>number</b>, x2:<b>number</b>, y2:<b>number</b>, lineWidth:<b>number</b>, lineCap::<b>string</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'More shapes are comming...'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'Star, heart, flower and curves.';
    div.appendChild(p);
}