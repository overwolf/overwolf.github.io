const fs = require('fs') // filesystem
const paths = ["../website/pages/docs/status/"] // the paths where the code should run

// generator code

const regex = /id: (\d*).*?(?:launcher: (\d*).*?)?(?:games: \[(\d+(?:,\d+)*?)\].*?)?path: "([\w-]*?)".*?name: "(.*?)"/gms
const tags = JSON.parse(fs.readFileSync("seo/tags/games.json", 'utf8'))["tags"].join(", ")
const seo = fs.readFileSync("templates/games-seo.mdx", 'utf8')

fs.readFile("configs/games-metadata.cfg", 'utf8', function(err, data) {
    if (err) {
        return console.error(err)
    }
    fs.readFile("templates/status.mdx", 'utf8', function(err, temp) {
        if (err) {
            return console.error(err)
        }

        if(fs.existsSync(paths[0])){
            fs.rmSync(paths[0], { recursive: true, force: true })
        }
        if(!fs.existsSync(paths[0])){
            fs.mkdirSync(paths[0])
        }
        if(fs.existsSync(paths[0])){
            fs.mkdirSync(paths[0] + "launchers/")
        }
        
        console.log(paths[0])

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
            let games = ""

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                switch (groupIndex) {
                    case 1:
                        id = match
                    case 3:
                        if(m[3] != undefined)
                            games = match
                    case 4:
                        path = match
                    case 5:
                        name = match
                }
            });

            fs.writeFile(paths[0] + (games != "" ? "launchers/" : "" ) + path + ".mdx", temp.replaceAll("$tags", seo).replaceAll("$tags", tags).replaceAll("$id", id).replaceAll("$path", path).replaceAll("$name", name), 'utf8', function err(err) {
                if (err) {
                    return console.error(err)
                }
            })
        }
    })
    fs.readFile("templates/status-all.mdx", 'utf8', function(err, temp) {
        if (err) {
            return console.error(err)
        }

        fs.writeFile(paths[0] + "status.mdx", temp, function(err) {
            if (err) {
                return console.error(err)
            }
        })
    })
})