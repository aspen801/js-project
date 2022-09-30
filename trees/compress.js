

import { mkdir, mkfile } from './file-system.js';

const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations', [
    mkfile('picture.jpg', { size: 125 })
  ]),
]);


const getFileType = (obj) => {
  const type = obj.name.split('.');
  return type[1];
};

const compressImages = (tree) => {
  tree.children.map((item) => {
    if (item?.children) {
      compressImages(item);
    } else if (item.type !== 'directory' && getFileType(item) === 'jpg') {
      item.meta.size /= 2;
    }
  });
  return tree;
};

console.dir(compressImages(tree), { depth: null, color: true });


