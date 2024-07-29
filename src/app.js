// // process.argv[0] = 'node executable'
// // process.argv[1] = 'javascript file'
// // const command = process.argv[2];

// // if(command === 'add'){
// //     console.log('Adding note!');
// // }
// // else if(command === 'remove'){
// //     console.log('Removing note!');
// // }

// const yargs = require('yargs');

// yargs.version('1.1.0');

// yargs.command({
//     command: 'add',
//     describe: 'This is add describe',
//     builder:{
//         first: {
//             describe: "First number.",
//             demandOption: true,
//             type: 'number'
//         },
//         second:{
//             describe: 'Second number.',
//             demandOption: false,
//             type: 'number'
//         }
//     },
//     handler: function(argv){
//         console.log('This add calulation here!', argv.first);
//     }
// });

// console.log(yargs.argv);

const myData = {
    day: 100,
    date: '20270510T00:00:00T',
}
const stringMyData = JSON.stringify(myData);
console.log(stringMyData);

const objectMydata = JSON.parse(stringMyData);
console.log(objectMydata);