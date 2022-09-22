/*
nodejs-package # directory (meta: { hidden: true })
├── Makefile # file
├── README.md # file
├── dist # empty directory
├── __tests__ # directory
│   └── half.test.js # file (meta: { type: 'text/javascript' })
├── babel.config.js # file (meta: { type: 'text/javascript' })
└── node_modules # directory (meta: { owner: 'root', hidden: false })
    └── @babel # directory
        └── cli # directory
            └── LICENSE # file

 {
  name: 'nodejs-package',
  type: 'directory',
  meta: {},
  children: [
    { name: 'Makefile', type: 'file', meta: {} },
    { name: 'README.md', type: 'file', meta: {} },
    { name: 'dist', type: 'directory', meta: {}, children: [] },
    {
      name: '_tests_',
      type: 'directory',
      meta: {},
      children: [ { name: 'half.test.js', type: 'file', meta: {} } ]
    },
    { name: 'babel.config.js', type: 'file', meta: {} },
    {
      name: 'node_modules',
      type: 'directory',
      meta: {},
      children: [
        {
          name: '@babel',
          type: 'directory',
          meta: {},
          children: [
            {
              name: 'cli',
              type: 'directory',
              meta: {},
              children: [ { name: 'LICENSE', type: 'file', meta: {} } ]
            }
          ]
        }
      ]
    }
  ]
}
*/

const mkdir = (name, children, meta = {}) => ({
  name,
  type: 'directory',
  meta,
  children,
});

const mkfile = (name, meta = {}) => ({
  name,
  type: 'file',
  meta,
});

const tree = mkdir('nodejs-package', [
  mkfile('Makefile'),
  mkfile('README.md'),
  mkdir('dist', []),
  mkdir('_tests_', [
    mkfile('half.test.js', { type: 'text/javascript' }),
  ]),
  mkfile('babel.config.js', { type: 'text/javascript' }),
  mkdir('lol_modules'),
  mkdir('node_modules', [
    mkdir('@babel', [
      mkdir('cli', [
        mkfile('LICENSE'),
      ]),
    ]),
  ], { owner: 'root', hidden: false }),
], { hidden: true });

const obj = {
  count: -1,
  stringTree: '',
  tab: () => '',
  getCurrentTab: (count) => {
    let newTab = obj.tab(count);
    for (let i = 0; i < count; i++) {
      newTab = newTab.concat('', '    ');
    }

    return newTab;
  },
  getEndline: (i) => `${obj.getCurrentTab(i)} └──`,
  getline: (i) => `${obj.getCurrentTab(i)} ├──`,
  printedTree: (tree) => {
    if (tree?.children) {
      obj.count++;
      tree.children.map((child, i, array) => {
        if (child?.children || i === array.length - 1) {
          obj.stringTree = obj.stringTree.concat(`${obj.getEndline(obj.count)}${child.name} \n`);     
          obj.printedTree(child);
        } else obj.stringTree = obj.stringTree.concat(`${obj.getline(obj.count)}${child.name} \n`);
      });
      obj.count = 1;
    }
    return (`${tree.name} \n` + `${obj.stringTree}`);
  },
};

console.dir(tree, { depth: null, color: true });
const testTree = obj;
console.log(testTree.printedTree(tree));
