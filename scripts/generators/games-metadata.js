const fs = require('fs') // filesystem
const paths = ["../website/static/js/games_metadata.js", "../website/src/components/game-events-status/gamesMetaData.jsx"] // the paths where the code should run
const compliance = "../website/pages/docs/start/game-compliance/"

// generator code

const regex = /id: (\d*).*?(?:launcher: (\d*).*?)?(?:games: \[(\d+(?:,\d+)*?)\].*?)?path: "([\w-]*?)".*?name: "(.*?)"/gms

fs.readFile("configs/games-metadata.cfg", 'utf8', function(err, data) {
    if (err) {
        return console.error(err)
    }
    fs.readFile("templates/metadata.cfg", 'utf8', function(err, temp) {
        if (err) {
            return console.error(err)
        }
        let first = "const GamesMetaData = {"
        let cont = []
        let second = "export const GamesMetadata = {"

        // generated with regex101

        let m;

        while ((m = regex.exec(data)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            let id = 0
            let launcher = -1
            let games = ""
            let path = ""
            let name = ""

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                switch (groupIndex) {
                    case 1:
                        id = match
                    case 2:
                        if(m[2] != undefined)
                            launcher = match
                    case 3:
                        if(m[3] != undefined)
                            games = match
                    case 4:
                        path = match
                    case 5:
                        name = match
                }
            });
            let compliant = fs.existsSync(compliance + path + ".mdx")
            let isLauncher = games === undefined

            cont.push(temp.replaceAll("$id", id).replaceAll("$path", path).replaceAll("$name", name).replaceAll(/\$compliant\((.*?)\)/gms, compliant ? "$1" : "").replaceAll(/\$launchers\((.*?)\)/gms, isLauncher ? "$1" : "").replaceAll("$games", games).replaceAll(/\$launched\((.*?)\)/gms, launcher != -1 ? "$1" : "").replaceAll("$launcherID", launcher))
        }
        let contS = cont.join(",")
        first += contS
        first += "\n}\n\nconsole.log('GamesMetadata is loaded locally')"
        second += contS
        second += "\n}"
        fs.writeFile(paths[0], first, 'utf8', function(err) {
            if (err) {
                return console.error(err)
            }
            return console.log(paths[0]);
        })
        fs.writeFile(paths[1], second, 'utf8', function(err) {
            if (err) {
                return console.error(err)
            }
            return console.log(paths[1])
        })
    })
})