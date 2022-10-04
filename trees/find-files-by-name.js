import path from 'node:path';
import { mkdir, mkfile, isFile } from './file-system.js';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('soft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

const findFilesByName = (tree, substr) => {
  const iter = (tree, acc) => {
    if (isFile(tree) && tree.name.includes(substr)) {
      return (path.join(acc, tree.name));
    }

    if (tree?.children) {
      const result = tree.children
        .map((child) => iter(child, path.join(acc, tree.name)))
        .filter((item) => item !== undefined)
        .flat();
      return result;
    }
  };

  const result = iter(tree, '');
  return result;
};

console.log(findFilesByName(tree, 'co'));
