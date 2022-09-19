// Rectangle abstraction

const makePoint = (x, y) => ({ x, y });

const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const getApex = (rectangle) => ({
  topLeftApex: getStartPoint(rectangle),
  bottomRightApex: { x: (getStartPoint(rectangle).x + getWidth(rectangle)), y: (getStartPoint(rectangle).y - getHeight(rectangle))},
});

const getQuadrant = (apex) => { //we can extend for 1 and 3 quadrants
  if (apex.x <= -1 && apex.y >= 1) {
    return 2;
  } 
  if (apex.x >= 1 && apex.y <= -1) {
    return 4;
  }
};

const containsOrigin = (rectangle) => {
  const apex = getApex(rectangle);
  if (getQuadrant(apex.topLeftApex) === 2 && getQuadrant(apex.bottomRightApex) === 4) {
    return true;
  } return false;
};

const point = makePoint(-1, 1);
const rect = makeRectangle(point, 2, 2);
console.log(rect);
console.log(getApex(rect));
console.log(containsOrigin(rect));
