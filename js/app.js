window.addEventListener('load', init, false);
function init() {

    window.addEventListener('mousemove', clickHandler, false);

    let velocity = Vector().setComponents(45, 5);
    let destination = Vector();
    let ball = SBall(Vector(100, 100), 20, AppColors().red);

    function update() {

        ball.position.add(velocity);
        ball.update();

        if (ball.position.x > window.innerWidth) {
            ball.position.x = 0 - ball.radius;
        }
        if (ball.position.y > window.innerHeight) {
            ball.position.y = 0 - ball.radius;
        }

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
        destination.x = x;
        destination.y = y;
        let angle = ball.position.angleTo(destination);
        velocity = Vector().setComponents(toDegrees(angle), 5);
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