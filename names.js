// Returns a list of names sorted in alphabetic order

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

const getSortedNames = (objArray) => {
  const names = [];

  for (let i = 0; i < objArray.length; i += 1) {
    const { name } = objArray[i];
    names[i] = name;
  }

  return names.sort();
};

const names = getSortedNames(users);

console.log(names);
