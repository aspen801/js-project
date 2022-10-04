const makeUser = (id, friends) => ({
  id,
  friends,
  getFriends: () => friends,
});

const getMutualFriends = (user1, user2) => {
  const result = user1.getFriends()
    .filter((item) => user2.getFriends().map((item) => item.id).includes(item.id));
  return result;
};

const user1 = makeUser(1, [
  makeUser(3, []),
  makeUser(2, []),
  makeUser(15, []),
]);

const user2 = makeUser(4, [
  makeUser(2, []),
  makeUser(5, []),
  makeUser(15, []),
]);
console.log(getMutualFriends(user1, user2));
