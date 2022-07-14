const fs = require('fs') // filesystem

fs.readFile("configs/clear.cfg", 'utf8', function ret(err, data) {
    if (err) {
        return console.error(err)
    }
    lines = data.split('\n')
    lines.forEach(element => {
        if (fs.existsSync(element)) {
            fs.rmSync(element, { recursive: true, force: true })
            console.log("Deleted: " + element)
        }
    });
})
