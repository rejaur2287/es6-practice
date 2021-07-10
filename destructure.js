const person = {
  name: 'Jack William',
  age: 17,
  job: 'Facebooker',
  gfName: 'Emma Watson',
  address: 'Kachu khet',
  phone: '01717112211',
  friends: ['Tom Hanks', 'Tom Cruise', 'Tom Yardly'],
};

const { phone, gfName, address, salary } = person;

const complexObject = {
  name: 'abc',
  info: {
    address: 'Kola Bagan',
    leader: 'Tiger Leader',
  },
};

const { leader } = complexObject.info;
console.log(leader);

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, salary);
// console.log(gfName, phone, address, salary);

const friends = ['Sakib Khan', 'Arman Khan', 'Salman Khan', 'Shahrukh Khan'];
// const [chotoFriend, nextFriend, ...restFriends] = friends;
const [chotoFriend, ...olderF] = friends;
// console.log(chotoFriend, nextFriend, restFriends);
// console.log(olderF);
