window.addEventListener('load', init, false);
function init() {
    console.log('init');
    let v1 = Vector(5, 5);
    let v2 = Vector(-5, 0);
    let angle = v1.angleBetween(v2);
    console.log('angle between: ' + toDegrees(angle));

    angle = v1.angleTo(v2);
    console.log('angle from v1 to v2: ' + toDegrees(angle));

    angle = v1.angleFrom(v2);
    console.log('angle from v2 to v1: ' + toDegrees(angle));
}