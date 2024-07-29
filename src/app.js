// process.argv[0] = 'node executable'
// process.argv[1] = 'javascript file'
// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Adding note!');
// }
// else if(command === 'remove'){
//     console.log('Removing note!');
// }

const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: '',
    handler: function(){
        console.log('This add calulation here!');
    }
});

console.log(yargs.argv);