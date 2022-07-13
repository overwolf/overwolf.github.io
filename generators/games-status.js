const fs = require('fs') // filesystem
const paths = ["../website/pages/docs/status/"] // the paths where the code should run

// generator code

const regex = /id: (\d*).*?path: "([\w-]*?)".*?name: "(.*?)"/gms

fs.readFile("configs/games-metadata.cfg", 'utf8', function ret(err, data) {
    if (err) {
        return console.log(err)
    }
    fs.readFile("templates/status.mdx", 'utf8', function ret(err, temp) {
        if (err) {
            return console.log(err)
        }

        // generated with regex101

        let m;

        while ((m = regex.exec(data)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            let id = 0
            let path = ""
            let name = ""

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                switch (groupIndex) {
                    case 1:
                        id = match
                    case 2:
                        path = match
                    case 3:
                        name = match
                }
            });

            fs.writeFile(paths[0] + path + ".mdx", temp.replaceAll("$id", id).replaceAll("$path", path).replaceAll("$name", name), 'utf8', function err(err) {
                if (err) {
                    return console.log(err)
                }
                return console.log(paths[0] + path + ".mdx");
            })
        }
    })
})