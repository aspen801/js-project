import async from 'async';
import fs from 'fs';
import _ from 'lodash';

const getDirectorySize = (dir, cb) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log('error');
    }
    const getFileSizeInBytes = (file, callback) => {
      fs.stat(file, (err, stat) => {
        if (err) {
          return callback(err);
        }
        callback(null, stat.size);
      });
    }

    async.map(files, getFileSizeInBytes, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        cb(null, _.sumBy(results));
      }
    });
  });
};

getDirectorySize('./', (err, size) => {
  console.log(size);
});
