const {pwd} = require('./pwd');
const {ls} = require('./ls');

process.stdout.write('prompt> ');
process.stdin.on('data', function(data){
    const cmd = data.toString().trim();

    pwd(cmd);
    ls(cmd);
    // process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt> ');
});