const fs = require('fs') // filesystem
const dec = require("./declare");
const paths = ["../website/pages/docs/status/"] // the paths where the code should run
const { metaData } = require("../configs/games-metadata.js");

// generator code
const tags = JSON.parse(fs.readFileSync("seo/tags/games.json", 'utf8'))["tags"].join(", ")
const seo = fs.readFileSync("templates/games-seo.mdx", 'utf8')


temp = fs.readFileSync("templates/status.mdx", 'utf8')
if (fs.existsSync(paths[0])) {
    fs.rmSync(paths[0], { recursive: true, force: true })
}
if (!fs.existsSync(paths[0])) {
    fs.mkdirSync(paths[0])
}
if (fs.existsSync(paths[0])) {
    fs.mkdirSync(paths[0] + "launchers/")
}


dec.declare(paths[0])

metaData.forEach(function (val) {
    let id = val["id"]
    let games = val.hasOwnProperty("games") ? val["games"] : ""
    let launcher = games != ""
    let path = val["path"]
    let name = val["name"]
    let endOfLife = val["endOfLife"]

    fs.writeFileSync(paths[0] + (launcher ? "launchers/" : "") + path + ".mdx", temp.replaceAll("$tags", seo).replaceAll("$tags", tags).replaceAll("$id", id).replaceAll("$path", path).replaceAll("$name", name).replaceAll("$imagePath", (launcher ? "launchers/" : "") + path).replaceAll("$endOfLife", endOfLife ? `"${endOfLife}"` : `""`), 'utf8')
})

temp = fs.readFileSync("templates/status-all.mdx", 'utf8')
fs.writeFileSync(paths[0] + "status.mdx", temp)
