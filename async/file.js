import fs from 'fs';

const move = (filePath, movePath, cb) => {
  fs.readFile(filePath, 'utf8', (err1, data) => {
    if (err1) {
      cb(err1);
    }
    fs.writeFile(movePath, data, (err2) => {
      if (err2) {
        cb(err2);
      }
    });
    fs.unlink(filePath, (err3) => {
      if (err3) {
        cb(err3);
      }
      cb(null);
    });
  });
};

move('./old.txt', './new.txt', (error) => {
  if (error) {
    console.log('An error occurred');
    return;
  }
  console.log('File moved successfully!');
});
