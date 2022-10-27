import fs from 'fs';

const filepath = './testfile';

const watch = (filepath, time, cb) => {
  let startDate = Date.now();
  const intervalId = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(intervalId);
        clearTimeout(mainTimeout);
        cb('Error occurred!');
        return;
      }
      if (startDate < stats.mtimeMs) {
        startDate = Date.now();
        cb('File was modified!');
      }
    });
  }, time);

  return intervalId;
};

const id = watch(filepath, 50, (error) => {
  console.log(error);
});
/*
setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 2700);
setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 4700);
*/
const mainTimeout = setTimeout(() => clearInterval(id), 20000);
