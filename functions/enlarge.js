const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

const enlargeArrayImage = (array) => {
  const enlargedImage = array.reduce(
    (acc, item) => {
      const newItem = item.reduce(
        (acc, arrayValue) => {
          acc.push(arrayValue, arrayValue);
          return acc;
        },
        [],
      );
      acc.push(newItem.toString(), newItem.toString());

      return acc;
    },
    [],
  );

  console.log(enlargedImage);
  
};

enlargeArrayImage(arr);
