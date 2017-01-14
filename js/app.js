window.addEventListener('load', init, false);
function init() {

    window.addEventListener('click', clickHandler, false);


    let isApplyingForce = true;
    let velocity = Vector().setComponents(30, 1);
    let acceleration = Vector(1, 1);
    let direction = Vector().zero();

    let ball = SBall(Vector(100, 100), 20, AppColors().red);

    function update() {


        // let angle = direction.findAngle(ball.position);
        // acceleration = Vector().setComponents(toDegrees(angle), 0.1);

        ball.position.add(velocity.add(acceleration));

        ball.update();

        // if (ball.position.x > window.innerWidth) {
        //     ball.position.x = 0 - ball.radius;
        //     // speed.x = 0.1;
        // }

        requestAnimationFrame(update);
    }

    update();

    function clickHandler(e) {
        // console.log(e);
        // direction = Vector(1, -1);
        setDirection(e.clientX, e.clientY);

    }

    function applyForce() {
        isApplyingForce = !isApplyingForce;
    }
    createButton(applyForce, 'force', 0)

    function addFriction() {
        friction.x += 0.01;
    }
    createButton(addFriction, 'add friction', 110);

    function setDirection(x, y) {

        direction = Vector(x, y);

        let angle = direction.findAngle(ball.position);
        // console.log(velocity.magnitude());
        //velocity.normalize();
        // velocity = Vector().setComponents(toDegrees(angle), velocity.magnitude);
        acceleration = Vector().setComponents(toDegrees(angle), 0.01);
        //direction = nd;
        console.log(acceleration);



    }
}

function createButton(callback, text, x) {
    let button = document.createElement('button');
    button.onclick = callback;
    button.innerText = text;
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.marginLeft = '10px';
    button.style.border = 'none';
    button.style.background = AppColors().lightblue;
    button.style.fontSize = '15px';
    button.style.fontFamily = 'Lato';
    document.body.appendChild(button);
}