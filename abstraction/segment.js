// Segment abstraction

const makePoint = (x, y) => ({ x, y });

const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint });

const getMidpointOfSegment = (segment) => {
  const midpointX = ((segment.beginPoint.x + segment.endPoint.x) / 2);
  const midpointY = ((segment.beginPoint.y + segment.endPoint.y) / 2);
  return { midpointX, midpointY };
};

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const begingPoint = makePoint(4, 5);
const endPoint = makePoint(8, 6);
const segment = makeSegment(begingPoint, endPoint);

console.log(segment);
console.log(getBeginPoint(segment));
console.log(getEndPoint(segment));
console.log(getMidpointOfSegment(segment));
