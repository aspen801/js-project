import _ from 'lodash';

const object = { a: [{ b: { c: 3 } }] };

test('set', () => {
    _.set(object, 'a[0].b.c', 4);
    _.set(object, ['x', '0', 'y', 'z'], 5)
    expect(object.a[0].b.c).toEqual(4);
    expect(object.x[0].y.z).toEqual(5);
    _.set(object, 'a[0].b.c', 3);
    expect(object.a[0].b.c).toEqual(3);
})
