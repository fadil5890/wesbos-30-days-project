const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

const comments = [
{ text: 'Love this!', id: 523423 },
{ text: 'Super good', id: 823423 },
{ text: 'You are the best', id: 2039842 },
{ text: 'Ramen is my fav food ever', id: 123523 },
{ text: 'Nice Nice Nice!', id: 542328 }
];



// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
function somePeople(){
    const year = new Date().getFullYear();
    function someCB(elem){
        return (year - elem.year) >= 19;
    }
    return people.some(someCB)
}
function everyPeople(){
    const year = new Date().getFullYear();
    return people.every( elem => {
        return (year - elem.year) >= 19;
    })
}

function result(){
    console.log(somePeople())
    console.log(everyPeople())
}
result()

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

function findComment(){
    return comments.find(elem => elem.id === 823423)
}
console.log(findComment())
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

function findIndexComment(){
    const index = comments.findIndex(elem => elem.id === 823423)
    comments.splice(index,1);
    return comments; 
}
console.log(findIndexComment())