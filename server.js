lesson 2, osa 3
//&& - AND

// if(userName === 'Harry' && age === 11 && isWizard === true) {
//     console.log(`${userName}, here is your letter from Hogwarts.`)
// } else {
//     console.log(`Your are not a wizard, ${userName}. Here is your Amazon package.`)
// }

// || - OR
// ! - NOT
if (userName !== 'Harry' || age !== 11 || !isWizard) {
    console.log(
        `Your are not a wizard, ${userName}. Here is your Amazon package.`
    );
} else {
    console.log(`${userName}, here is your letter from Hogwarts.`);
}

lesson 2, osa 4
const userName = 'Harry';
let age = 11;
const isWizard = true; //true/false - boolean

// console.log('I am a wizard now! Hurray!');
// console.log('I am a wizard now! Hurray!');
// console.log('I am a wizard now! Hurray!');
// console.log('I am a wizard now! Hurray!');
// console.log('I am a wizard now! Hurray!');

//DRY - do not repeat yourself
//i++ ==> i = i + 1
for(let i=0; i < 5; i++) {
    console.log(`${i + 1} I am a wizard now! Hurray!`);
}

lesson 2. Osa 5
const userName = 'Harry';
let friends = ['Ron', 'Hermione', 'Hedwig'];
//let numberOfFriends = friends.length
console.log(`${userName} has got ${friends.length} friends.`)

// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[friends.length - 1])
// console.log(friends[3])

for(let i=0; i < friends.length; i++) {
    console.log(`${i + 1}. ${friends[i]}`)
}

lesson 2. Osa 6
const userName = 'Harry';
let friends = ['Ron', 'Hermione', 'Hedwig'];
//let numberOfFriends = friends.length
console.log(`${userName} has got ${friends.length} friends.`);

// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[friends.length - 1])
// console.log(friends[3])
console.log('---for');
for (let i = 0; i < friends.length; i++) {
    friends[i] = friends[i] + '*';
 //   console.log(`${i + 1}. ${friends[i]}`);
}

console.log('---forEach 1');
friends.forEach((friend) => {
    friend = friend + '*'
    console.log(friend);
});

console.log('---forEach 2');
friends.forEach((element, index) => {
    console.log(`${index} ${element}`);
});

lesson 2, osa 7
const userName = 'Harry';
let friends = ['Ron', 'Hermione', 'Hedwig'];
friends.push('Draco');

console.log('---for');
for (let i = 0; i < friends.length; i++) {
    if (friends[i] === 'Draco') {
        continue;
    }
    friends[i] = friends[i] + '*';
}

console.log('---forEach 1');
friends.forEach((friend) => {
    console.log(friend);
});

lesson 2, osa 8
const userName = 'Harry';
let friends = ['Ron', 'Hermione', 'Hedwig'];
friends.push('Draco');

console.log('---for');
for (let i = 0; i < friends.length; i++) {
    if (friends[i] === 'Draco') {
        weAreNotFriends(friends[i])
        continue;
    }
    friends[i] = friends[i] + '*';
    greeting(friends[i])
}

console.log('---forEach 1');
friends.forEach((friend) => {
    console.log(friend);
});

function greeting(friendsname) {
    console.log(`Hello, ${friendsname}!`)
}

function weAreNotFriends(enemyname) {
    console.log(`Go away, ${enemyname}! We are not friends!`)
}