function getBeginPoint(){
    return this.beginPoint;
}

function getEndPoint(){
    return this.endPoint;
}


function Point(x, y){
    this.x = x;
    this.y = y;
}

function Segment(beginPoint, endPoint){
    this.beginPoint = beginPoint,
    this.endPoint = endPoint
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
}

function reverse(segment){
    const newSegment = new Segment(segment.getEndPoint(), segment.getBeginPoint());
    return newSegment;
}

const point1 = new Point(-3, 5);
const point2 = new Point(8, 3);

const segment = new Segment(point1, point2);
const reversedSegment = reverse(segment);

console.log(segment.getBeginPoint(), segment.getEndPoint());
console.log(reversedSegment.getBeginPoint(), reversedSegment.getEndPoint());

