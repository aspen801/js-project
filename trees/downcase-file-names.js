import { mkdir, mkfile, isFile } from './file-system.js';

const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);

const downcaseFileNames = (tree) => {
    console.log(tree);
    if(isFile(tree)){
        return mkfile(tree.name.toLowerCase());
    } else {
    const newChildren = tree.children.map((child) => downcaseFileNames(child, tree.name))
    return mkdir(tree.name, newChildren);
    }
}



console.dir(downcaseFileNames(tree), { depth: null, color: true });