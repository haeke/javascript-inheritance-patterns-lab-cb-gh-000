
function Point(x,y) {
    this.x = x;
    this.y = y;
}

//add a ToString function to the Point prototype to be shared with Shape
Point.prototype.toString = function() {
    return this.x + ', ' + this.y;
}

//create a function to store the a side taking in a length parameter
function Side(length) {
    this.length = length;
}

//create a Shape function with prototype functions to addToPlane and move
function Shape(position) {
    this.position = position;
}
//use the Point function that uses the Point function to set a position on a plane
Shape.prototype.addToPlane = function(x, y) {
    this.position = new Point(x, y);
}

//use the move function that uses the Point function to move the position on the plane
Shape.prototype.move = function(x, y) {
    this.position = new Point(x, y);
}

//Define a Circle function object that inherits from Shape and is constructed with an integer argument that sets the radius property.
function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}
//Inherit the prototype functions of Shape in the Circle object
Circle.prototype = Object.create(Shape.prototype);
//create a conrtructor for the Circle object
Circle.prototype.constructor = Circle;

//create a area function for a Circle
Circle.prototype.area = function() {
    return (Math.PI * (Math.pow(this.radius, 2)));
}

//create a circumfrance function for a Circle
Circle.prototype.circumference = function() {
    return (2 * Math.PI * this.radius);
}

//create a diameter function for Circle
Circle.prototype.diameter = function() {
    return (2 * this.radius);
}

//create an object called Polygon that inherits from Shape
function Polygon(sides) { 
    Shape.call(this);
    this.sides = sides;
}
//Inherit the prototype functions of Shape in the Polygon object
Polygon.prototype = Object.create(Shape.prototype);
//create a constructor for the Polygon object
Polygon.prototype.constructor = Polygon;

//create a perimeter prototype function that returns the perimeter of the sides passed to Polygon
Polygon.prototype.perimeter = function() {
    var perimeter = 0;
    for (var i = 0; i < this.sides.length; i++) {
        perimeter += this.sides[i].length;
    }
    return perimeter;
}

//create a numberOfSides prototype function that returns the length of the sides array
Polygon.prototype.numberOfSides = function() {
    return this.sides.length;
}

//create a Triangle object that inherits from the Polygon object
function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
    Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)]);
}

//inherit prototype functions of Polygon inside of the Triangle object
Triangle.prototype = Object.create(Polygon.prototype);
//create a constructor function on the Triangle object
Triangle.prototype.constructor = Triangle;

//Create a Quadrilateral object that inherits the prototype functions from Polygon
function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
    Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}
//inherit the prototype functions of Polygon inside of the Quadrilateral object
Quadrilateral.prototype = Object.create(Polygon.prototype);
//create a constructor function on the Quadrilateral function
Quadrilateral.prototype.constructor = Quadrilateral;

//create a Rectangle object that inherits from the prototype functions of Quadrilateral
function Rectangle(width, height) {
    Quadrilateral.call(this, width, height, width, height);
    this.width = width;
    this.height = height;
}
//inherit the Quadrilateral prototype functions inside of the Rectangle object
Rectangle.prototype = Object.create(Quadrilateral.prototype);
//create a constructor on the prototype of Rectangle
Rectangle.prototype.constructor = Rectangle;

//create a an area function on the Rectangle object
Rectangle.prototype.area = function() {
    return this.width * this.height;
}

//create a Square object that inherits from the prototype functions of Rectangle
function Square(length) {
    Rectangle.call(this, length, length);
    this.length = length;
}

//inherit the Square prototype functions inside of the Square object
Square.prototype = Object.create(Rectangle.prototype);
//create a construction on the prototype of Square
Square.prototype.constructor = Shape;

//create a listProperties prototype function on the Shape object
Square.prototype.listProperties = function() {
    var props = '';
    for (props in this) {
        if (this.hasOwnProperty(props)) {
            props += 'this. ' + props + ' = ' + this[props] + '\n';
        }
    }
    return props;
};