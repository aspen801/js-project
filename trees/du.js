import { mkdir, mkfile, isFile } from './file-system.js';
import { getSum } from './get-hidden-files-count.js';

const tree = mkdir('/', [
    mkfile('file', { size: 1500 }),
    mkdir('etc', [
      mkdir('apache'),
      mkdir('nginx', [
        mkfile('nginx.conf', { size: 800 }),
      ]),
      mkdir('consul', [
        mkfile('config.json', { size: 1200 }),
        mkfile('data', { size: 8200 }),
        mkfile('raft', { size: 80 }),
      ]),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);

const getSize = (node) => {
  if(isFile(node)){
    return node.meta.size;
  } else if(node?.children) {
    const size = node.children.map((child) => getSize(child));
    return getSum(size);
  } else return 0;
}

const du = (tree) => {
    const results = tree.children.map((child) => {
      return [child.name, getSize(child)];
    })
    return results;
} 

console.log(du(tree));
  
