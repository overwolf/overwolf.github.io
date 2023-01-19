const fs = require('fs') // filesystem
const dec = require("./declare");
const paths = ["../website/pages/docs/api/changelogs/"] // the paths where the code should run

const logs = JSON.parse(fs.readFileSync("configs/changelogs.json", 'utf8'))
// generator code

fs.readFile("templates/changelogs.mdx", 'utf8', function (err, temp) {
    if (err) {
        return console.error(err)
    }
    let dev = logs["dev"]
    let cur = logs["latest"]
    let electron = logs["ow-electron"]
    let builder = logs["ow-electron-builder"]
    let docs = logs["docs"]
    fs.writeFileSync(paths[0] + "changelogs.mdx",temp
    .replaceAll("$latest-ver", cur["name"]).replaceAll("$latest-date", cur["date"]).replaceAll("$latest-path", cur["path"])
    .replaceAll("$dev-ver", dev["name"]).replaceAll("$dev-date", dev["date"]).replaceAll("$dev-path", dev["path"])
    .replaceAll("$ow-electron-ver", electron["name"]).replaceAll("$ow-electron-date", electron["date"]).replaceAll("$ow-electron-path", electron["path"])
    .replaceAll("$ow-electron-builder-ver", builder["name"]).replaceAll("$ow-electron-builder-date", builder["date"]).replaceAll("$ow-electron-builder-path", builder["path"])
    .replaceAll("$doc-ver", docs["name"]).replaceAll("$doc-date", docs["date"]).replaceAll("$doc-path", docs["path"])
    )
    dec.declare(paths[0] + "changelogs.mdx")
})
