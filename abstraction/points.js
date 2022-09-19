// Polar coordinate system abstraction

const makeDecartPoint = (x, y) => ({ angle: Math.atan2(y, x), radius: Math.sqrt(x ** 2 + y ** 2) });

const getX = (point) => Math.round(point.radius * Math.cos(point.angle));

const getY = (point) => Math.round(point.radius * Math.sin(point.angle));

const point = makeDecartPoint(7, 9);

console.log(getX(point));
console.log(getY(point));
