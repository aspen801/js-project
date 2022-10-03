import { mkdir, mkfile, isFile } from './file-system.js';

const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('coNfig.json'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);

const downcaseFileNames = (tree) => {
    if(isFile(tree)){
        return mkfile(tree.name.toLowerCase());
    } else {
    const newChildren = tree.children.map(downcaseFileNames)
    return mkdir(tree.name, newChildren);
    }
}



console.dir(downcaseFileNames(tree), { depth: null, color: true });