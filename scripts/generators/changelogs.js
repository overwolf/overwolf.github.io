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
    let deploying = logs["deploying"]
    fs.writeFileSync(paths[0] + "changelogs.mdx", temp
    .replaceAll("$latest-ver-display", cur["name"] + (cur["suffix"] ?? "")).replaceAll("$latest-ver", cur["name"]).replaceAll("$latest-date", cur["date"]).replaceAll("$latest-path", cur["path"])
    .replaceAll("$deploying-ver-display", deploying["name"] + (deploying["suffix"] ?? "")).replaceAll("$deploying-ver", deploying["name"]).replaceAll("$deploying-date", deploying["date"]).replaceAll("$deploying-path", deploying["path"])
    .replaceAll("$dev-ver-display", dev["name"] + (dev["suffix"] ?? "")).replaceAll("$dev-ver", dev["name"]).replaceAll("$dev-date", dev["date"]).replaceAll("$dev-path", dev["path"])
    .replaceAll("$ow-electron-ver", electron["name"]).replaceAll("$ow-electron-date", electron["date"]).replaceAll("$ow-electron-path", electron["path"])
    .replaceAll("$ow-electron-builder-ver", builder["name"]).replaceAll("$ow-electron-builder-date", builder["date"]).replaceAll("$ow-electron-builder-path", builder["path"])
    .replaceAll("$doc-ver", docs["name"]).replaceAll("$doc-date", docs["date"]).replaceAll("$doc-path", docs["path"])
    .replaceAll("$console-ver", docs["name"]).replaceAll("$console-date", docs["date"]).replaceAll("$console-path", docs["path"])
    .replaceAll(/\$deploying\?\{(.*?)\}/gms, deploying.name !== cur.name || deploying.suffix !== cur.suffix ? "$1" : "")
    )

    dec.declare(paths[0] + "changelogs.mdx")
})
