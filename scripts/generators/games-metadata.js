const fs = require('fs') // filesystem
const dec = require("./declare");
const paths = ["../website/static/js/games_metadata.js", "../website/src/components/game-events-status/gamesMetaData.jsx"] // the paths where the code should run
const compliance = "../website/pages/docs/start/game-compliance/"

// generator code

fs.readFile("configs/games-metadata.json", 'utf8', function(err, data) {
    if (err) {
        return console.error(err)
    }
    const json = JSON.parse(data)
    fs.readFile("templates/metadata.cfg", 'utf8', function(err, temp) {
        if (err) {
            return console.error(err)
        }
        let first = "const GamesMetaData = {"
        let cont = []
        let second = "export const GamesMetadata = {"

        json.forEach(function(val) {
            let id = val["id"]
            let displayId = val.hasOwnProperty("displayId") ? val["displayId"] : -1
            let launcher = val.hasOwnProperty("launcher") ? val["launcher"] : -1
            let games = val.hasOwnProperty("games") ? val["games"] : undefined
            let path = val["path"]
            let name = val["name"]

            let compliant = fs.existsSync(compliance + path + ".mdx")
            let isLauncher = games != undefined

            cont.push(temp.replaceAll("$id", id).replaceAll("$path", path).replaceAll(/\$display\((.*?)\)/gms, displayId != -1 ? "$1" : "").replaceAll("$displayId", displayId).replaceAll("$name", name).replaceAll(/\$compliant\((.*?)\)/gms, compliant ? "$1" : "").replaceAll(/\$launchers\((.*?)\)/gms, isLauncher ? "$1" : "").replaceAll("$games", games).replaceAll(/\$launched\((.*?)\)/gms, launcher != -1 ? "$1" : "").replaceAll("$launcherID", launcher))
        })
        let contS = cont.join(",")
        first += contS
        first += "\n}\n\nconsole.log('GamesMetadata is loaded locally')"
        second += contS
        second += "\n}"
        fs.writeFile(paths[0], first, 'utf8', function(err) {
            if (err) {
                return console.error(err)
            }
            dec.declare(paths[0]);
        })
        fs.writeFile(paths[1], second, 'utf8', function(err) {
            if (err) {
                return console.error(err)
            }
            dec.declare(paths[1])
        })
    })
})