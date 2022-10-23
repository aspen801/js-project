import fs from 'fs';

const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, stat1) => {
    fs.stat(filepath2, (_error2, stat2) => {
      const result = Math.sign(stat1.size - stat2.size);
      cb(result);
    });
  });
};

compareFileSizes('../oop-design/protect.js', '../oop-design/normalize.js', (result) => console.log(result));
