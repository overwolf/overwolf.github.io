const fs = require('fs') // filesystem

function declare(message){
    console.log(message.replace(/\.\.\/website/gm, 'Generated: '))
    fs.appendFileSync("./configs/clear.cfg", message + '\n')
}

module.exports = { declare }