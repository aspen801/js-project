const tree1 = [1, 2, [3, 5], [[4, 3], 2]];

const removeFirstLevel = (tree) => {
   const newTree = [];
    tree.filter((value) => {
        if(Array.isArray(value)) {
           newTree.push(value.map((value) => value))
        }
   })

   return newTree.flat();

}

console.log(removeFirstLevel(tree1));