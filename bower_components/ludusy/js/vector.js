/**
 * Point
 * This is a simple class to define a point in space.
 * @param {number} x - X position.
 * @param {number} y - Y position.
 */
function Point(x, y) {
    if (!(this instanceof Point)) {
        return new Point(x, y);
    }
    this.x = x;
    this.y = y;
}

/**
 * Vector
 * This class is divide in two types of methods, creation and operations.
 * Creation methods will create or change the values of this vector.
 * Operations will calculate this vector.
 * @param {number} x - X position.
 * @param {number} y - Y position.
 */
function Vector(x, y) {
    if (!(this instanceof Vector)) {
        return new Vector(x, y);
    }
    this.x = x || 0;
    this.y = y || 0;
}

/**
 * Create a new vector with zero values.
 * @return {number} value - A zero values vector..
 */
Vector.prototype.zero = function () {
    this.x = 0;
    this.y = 0;
    return this;
}

/**
 * Adds the values of the vector passed on the param to this vector.
 * @param {Vector} v - Vector to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.add = function (v) {
    this.x += v.x;
    this.y += v.y;
    return this;
};

/**
 * Adds the value to this vector X component.
 * @param {number} value - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.addX = function (value) {
    this.x += value;
    return this;
};

/**
 * Adds the value to this vector the Y component.
 * @param {number} value - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.addY = function (value) {
    this.y += value;
    return this;
};

/**
 * Removes the values of the vector passed on the param to this vector.
 * @param {Vector} v - Vector to be remove.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.remove = function (v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
};

/**
 * Removes the value passed on the param to this vector X component.
 * @param {number} value - Value to be remove.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.removeX = function (value) {
    this.x -= value;
    return this;
};

/**
 * Removes the value passed on the param to this vector Y component.
 * @param {number} value - Value to be remove.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.removeY = function (value) {
    this.y -= value;
    return this;
};

/**
 * Multiplies this vector's components to the vector's components passed as the param.
 * @param {Vector} v - The value to multiply for.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.multiply = function (v) {
    this.x = (this.x * v.x);
    this.y = (this.y * v.y);
    return this;
};

/**
 * Multiplies the X component of the vector to the value passed on the param.
 * @param {number} x - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.multiplyX = function (value) {
    this.x = (this.x * value);
    return this;
};

/**
 * Multiplies the Y component of the vector to the value passed on the param.
 * @param {number} value - The value to be added.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.multiplyY = function (value) {
    this.y = (this.y * value);
    return this;
};

/**
 * Divides this vector's components to the vector's components passed as the param.
 * @param {Vector} v - The vector to divide for.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.divide = function (v) {
    this.x = (this.x / v.x);
    this.y = (this.y / v.y);
    return this;
};

/**
 * Scales this vector's components by value passed as the param.
 * @param {number} value - The value to scale for.
 * @return {Vector} this - Returns this vector with the new values.
 */
Vector.prototype.scale = function (value) {
    this.x = (this.x * value);
    this.y = (this.y * value);
    return this;
};

/* -------------------------------------------------------- */
//Vector Operations
/* -------------------------------------------------------- */

/**
 * Calculates this vector's magnitude.
 * @return {number} value - Returns this vector magnitude.
 */
Vector.prototype.magnitude = function () {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

/**
 * Finds the magnitud from this vector to another vector.
 * @param {Vector} v - The vector to calculate magnitud to.
 * @return {number} value - Returns the magnitud value.
 */
Vector.prototype.magnitudeTo = function (v) {
    let a = this.x - v.x;
    let o = this.y - v.y;
    return Math.sqrt((a * a) + (o * o));
};

/*
* Normalizes this vector normalized, to normaliza a vector just divide its components by its magnintud.
@return {Vector} this - Returns a new vector with it's components normalized keeping the same angle.
**/
Vector.prototype.normalize = function () {
    let mag = this.magnitude();
    return Vector(this.x / mag, this.y / mag);
};

/**
 * Finds this vector's dot product in relation to the vector passed as the param.
 * @param {Vector} v - The vector to calculate dot producto for.
 * @return {number} value - Returns the dot product value.
 */
Vector.prototype.dot = function (v) {
    return (this.x * v.x) + (this.y * v.y);
};

/** 
 * Calculates and creates a the vectors using an angle and a magnitude.
 * @param {number} angle - The vectors angle in radias.
 * @param {number} maginitude - The vectors maginitude.
 * @return {Vector} vector - Return a new vector with the component's value set.
 */
Vector.prototype.setComponents = function (angle, magnitude) {
    let r = angle * Math.PI / 180;
    let o = (magnitude * Math.sin(r)) + this.y;
    let a = (magnitude * Math.cos(r)) + this.x;
    return new Vector(a, o);
};

/**
 * Calculates this vector's angle.
 * @return {number} value - Returns this vector angle in radians.
 */
Vector.prototype.angle = function angle() {
    return Math.atan2(this.y, this.x);
};

/** 
 * Finds the angle from this vector to another vector.
 * @param {Vector} v - The vector to find the angle to.
 * @return {number} angle - Return the angle in radias.
 */
Vector.prototype.angleTo = function (v) {
    let a = v.x - this.x;
    let o = v.y - this.y;
    return Math.atan2(o, a);
};

/** 
 * Finds the angle to this vector from another vector.
 * @param {Vector} v - The vector to find the angle to.
 * @return {number} angle - Return the angle in radias.
 */
Vector.prototype.angleFrom = function findAngle(v) {
    let o = this.y - v.y;
    let a = this.x - v.x;
    return Math.atan2(o, a);
};

/** 
 * Finds the angle between this vector and another vector.
 * @param {Vector} v - The vector to find the angle to.
 * @return {number} angle - Return the angle in radias.
 */
Vector.prototype.angleBetween = function findAngle(v) {
    return Math.acos(this.dot(v) / this.magnitude() / v.magnitude());
};

/** 
 * Converts randians to degrees.
 * @param {number} radians - The radians angle to convert to degrees.
 * @return {number} angle - Return the angle in degrees.
 */
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

/** 
 * Converts degrees to radians.
 * @param {number} degrees - The degrees angle to convert to radians.
 * @return {number} angle - Return the angle in radians.
 */
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

/** 
 * Check if this vector components are equal to vecto pass on the param.
 * @param {Vector} v - The vector to find the angle to.
 * @return {boolean} value - Return true or false.
 */
Vector.prototype.equalTo = function (v) {
    let distance = this.magnitudeTo(v);
    if (distance < 5) {
        return true;
    } else {
        return false;
    }
};