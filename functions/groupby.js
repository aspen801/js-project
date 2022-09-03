// .reduce usage

import _ from 'lodash';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

const groupBy = (students, group) => students.reduce((acc, student) => {
  if (!_.has(acc, student[group])) {
    acc[student[group]] = [];
  }
  acc[student[group]].push(student);
  return acc;
}, {});

console.log(groupBy(students, 'class'));
