// Point
function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.getX = getX;
Point.prototype.getY = getY;


function getX(){
    return this.x;
}

function getY(){
    return this.y;
}

Point.prototype.toString = function(){
    return (`(${this.getX()}, ${this.getY()})`);
}

//Segment
function Segment(beginPoint, endPoint){
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = getBeginPoint;
Segment.prototype.getEndPoint = getEndPoint;

function getBeginPoint(){
    return this.beginPoint;
}

function getEndPoint(){
    return this.endPoint;
}

Segment.prototype.toString = function(){
    return (`[(${this.getBeginPoint().x}, ${this.getBeginPoint().y}), (${this.getEndPoint().x}, ${this.getEndPoint().y})]`);
}



const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
console.log(point1.toString());

const segment1 = new Segment(point1, point2);
const segment2 = new Segment(point2, point1);
console.log(segment1.toString());
console.log(segment2.toString()); 




