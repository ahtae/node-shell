const fs = require('fs');

function command(cmd){
    if(cmd === 'ls'){
       fs.readdir(__dirname, function(err, data){
           if(err) throw err;
           data.forEach(elem => console.log(elem));
       })
    }
}

module.exports = {ls: command};    