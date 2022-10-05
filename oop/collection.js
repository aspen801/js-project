const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
  ];

const each = function each(obj, cb) {
    obj.forEach(item => {
        cb.call(item);
    });
}

const cb = function callback() {
    this.name = this.name.split('').reverse().join('');
}

each(objects, cb);
console.log(objects);

