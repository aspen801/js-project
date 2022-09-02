import _ from 'lodash';

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

const takeOldest = (users, num = 1) => {
  const userArray = _.sortBy(users, (users) => Date.parse(users.birthday));
  userArray.splice(num, userArray.length - num);
  return userArray;
};

console.log(takeOldest(users,3));
