const fs = require('fs') // filesystem

fs.readFile("configs/clear.cfg", 'utf8', function ret(err, data) {
    if (err) {
        return console.log(err)
    }
    lines = data.split('\n')
    lines.forEach(element => {
        if (fs.existsSync(element)) {
            fs.unlink(element, function ret(err, data) {
                if (err) {
                    return console.log(err)
                }
                return console.log("Deleted: " + element)
            })
        }
    });
})
