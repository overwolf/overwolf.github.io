const fs = require('fs') // filesystem
const paths = ["../website/pages/docs/api/games/events/", "../website/pages/docs/api/games/launchers/events/"] // the paths where the code should run

// generator code

const regex = /id: (\d*).*?(?:launcher: (\d*).*?)?(?:games: \[(\d+(?:,\d+)*?)\].*?)?path: "([\w-]*?)".*?name: "(.*?)"/gms
const tags = JSON.parse(fs.readFileSync("seo/tags/games.json", 'utf8'))["tags"].join(", ")
const tagger = /---\n\n.*?(<GameInfo gameID)/gms
const seo = fs.readFileSync("templates/games-seo.mdx", 'utf8')

fs.readFile("configs/games-metadata.cfg", 'utf8', function (err, data) {
    if (err) {
        return console.error(err)
    }
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
                    if (m[3] != undefined)
                        games = match
                case 4:
                    path = match
                case 5:
                    name = match
            }
        });

        let data = fs.readFileSync(paths[games != "" ? 1 : 0] + path + ".mdx", 'utf8')
        
        if(data.search(tagger) === -1){
            console.error(paths[games != "" ? 1 : 0] + path + ".mdx" + " does not have a proper place for seo tagging")
        }
        fs.writeFileSync(paths[games != "" ? 1 : 0] + path + ".mdx", data.replaceAll(tagger, "---\n\n" + seo + "\n\n$1").replaceAll("$tags", tags).replaceAll("$name", name), 'utf8')
    }
})