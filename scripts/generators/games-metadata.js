const fs = require('fs') // filesystem
const { declare } = require("./declare");
const paths = ["../website/static/js/games_metadata.js", "../website/src/components/game-events-status/gamesMetaData.jsx"] // the paths where the code should run
const compliance = "../website/pages/docs/start/game-compliance/"

// generator code

function getIfExists(val, path) {
    return val[path]
}

fs.readFile("configs/games-metadata.json", 'utf8', function (err, data) {
    if (err) {
        return console.error(err)
    }
    const json = JSON.parse(data)
    const GamesMetaData = {}

    json.forEach(function (val) {
        let id = val["id"]
        let path = val["path"]
        let name = val["name"]

        let games = getIfExists(val, "games")
        let compliant = fs.existsSync(compliance + path + ".mdx")
        let isLauncher = games != undefined

        let fullPath = `${isLauncher ? 'launchers/' : ''}${path}`

        GamesMetaData[id] = {
            id,
            displayId: getIfExists(val, "displayId"),
            name,
            path: `/status/${fullPath}`,
            launcherID: getIfExists(val, "launcher"),
            mainVariant: getIfExists(val, "mainVariant"),
            subVariant: getIfExists(val, "subVariant"),
            compliance: compliant ? `/start/game-compliance/${path}` : undefined,
            docs: `/api/games/${isLauncher ? 'launchers/' : ''}events/${path}`,
            iconUrl: `/img/games-logos/${fullPath}.png`,
            iconLargeUrl: `/img/games-logos/large/${fullPath}.png`,
            launcher: isLauncher ? { games } : undefined
        }
    })
    const stringified = JSON.stringify(GamesMetaData, undefined, 4);

    let oldJSON = `const GamesMetaData = ${stringified}\n\nconsole.log('GamesMetaData is loaded locally');`

    let newJSON = `export const GamesMetadata = ${stringified}`

    fs.writeFile(paths[0], oldJSON, 'utf8', function (err) {
        if (err) {
            return console.error(err)
        }
        declare(paths[0]);
    })
    fs.writeFile(paths[1], newJSON, 'utf8', function (err) {
        if (err) {
            return console.error(err)
        }
        declare(paths[1])
    })
})