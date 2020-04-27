function command(cmd){
    if(cmd === 'pwd'){
        console.log(process.cwd());
    }
}

module.exports = { pwd: command};