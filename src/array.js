const users = [
    {
        name: 'Andrew Mead',
        age: 27,
    },
    {
        name: 'George Hudson',
        age: 72,
    },
    {
        name: 'Clay Klay',
        age: 45,
    },
];
debugger;

const user = users.find((usr) => {
    console.log('now loop inside find with', usr.name);
    return usr.name === 'Clay Klay';
});

console.log(user);