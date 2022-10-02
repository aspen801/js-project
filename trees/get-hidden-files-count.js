import { mkdir, mkfile, isFile } from './file-system.js';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('.data.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('.file', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

const getSum = (array) => array.reduce((accumulator, item) => {
  accumulator += item;
  return accumulator;
}, 0);

const getHiddenFilesCount = (tree) => {
  if (isFile(tree) && tree.name[0] === '.') {
    return 1;
  } if (tree?.children) {
    const { children } = tree;
    const count = children.map((child) => getHiddenFilesCount(child));
    return getSum(count);
  } return 0;
};

console.log(getHiddenFilesCount(tree));
