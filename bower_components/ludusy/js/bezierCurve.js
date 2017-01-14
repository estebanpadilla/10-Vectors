
/**
 * Defines a BezierCurve shape for the canvas
 * @constructor
 * @param {number} sx - Start x postion.
 * @param {number} sy - Start y postion.
 * @param {number} cp1x - X position for the first control point.
 * @param {number} cp1y - Y position for the first control point.
 * @param {number} cp2x - X position for the second control point.
 * @param {number} cp2y - Y position for the second control point.
 * @param {number} ex - End x postion.
 * @param {number} ey - End y postion.
 * @param {string} color - Color for the shape.
 * @param {CanvasRenderingContext2D} context - The 2d rendering context from the canvas.
 */
function BezierCurve(sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey, color, context) {
    this.sx = sx;
    this.sy = sy;
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.cp2x = cp2x;
    this.cp2y = cp2y;
    this.ex = ex;
    this.ey = ey;
    this.color = color;
    this.context = context;
}

BezierCurve.prototype.render = function () {
    this.context.strokeStyle = this.color;
    this.context.fillStyle = 'none';
    this.context.beginPath();
    this.context.moveTo(this.sx, this.sy);
    this.context.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.ex, this.ey);
    //context.closePath();
    this.context.lineWidth = 4;
    this.context.lineCap = 'round';
    this.context.stroke();
}

BezierCurve.prototype.update = function () {
    this.render();
}
