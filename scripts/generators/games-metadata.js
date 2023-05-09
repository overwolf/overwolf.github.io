const fs = require('fs') // filesystem
const { declare } = require("./declare");
const { metaData } = require('../configs/games-metadata.js');
const paths = ["../website/static/js/games_metadata.js", "../website/src/components/game-events-status/gamesMetaData.jsx"] // the paths where the code should run
const compliancePath = "../website/pages/docs/start/game-compliance/"

// generator code

function getIfExists(val, path) {
    return val[path]
}

const GamesMetaData = {}

metaData.forEach(function (
    // @ts-check
    /** @type {GameMetaData} */
    val
    ) {
    const id = val.id;
    const path = val.path;
    const isLauncher = !!val.games
    const fullPath = `${isLauncher ? 'launchers/' : ''}${path}`

    const compliant = fs.existsSync(compliancePath + fullPath + ".mdx")

    val.path = `/status/${fullPath}`;
    val.compliance = compliant ? `/start/game-compliance/${val.compliance ?? path}` : undefined;
    val.docs = `/api/games/${isLauncher ? 'launchers/' : ''}events/${val.docs ?? path}`
    val.iconUrl = `/img/games-logos/${fullPath}.png`;
    val.iconLargeUrl = `/img/games-logos/large/${fullPath}.png`;


    GamesMetaData[id] = val;
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