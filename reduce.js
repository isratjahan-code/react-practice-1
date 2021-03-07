// const friends = [12, 13, 14, 15, 16, 17];
// const total = friends.reduce((sum, number) => sum + number, 0);
// console.log(total);

// const nameArray = ["Nipa", "Raha", "Shovon", "Maisha"];
// const all = nameArray.reduce((allName, singleName) => {
//     return allName + singleName
// }
//     , 0);
// console.log(all);


const friendsName = [ 
    {name: 'Rashed', money: 12},
    {name: 'Nashed', money: 25},
    {name: 'Pashed', money: 37},
    {name: 'Chashed', money: 29},
    {name: 'Munia', money: 100},
];
const list = friendsName.reduce((allFriends, singleFriend) => {
    console.log(allFriends, singleFriend);
    return allFriends + singleFriend.money
},
0);
console.log(list);