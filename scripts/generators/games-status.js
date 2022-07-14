const fs = require('fs') // filesystem
const dec = require("./declare");
const paths = ["../website/pages/docs/status/"] // the paths where the code should run

// generator code
const tags = JSON.parse(fs.readFileSync("seo/tags/games.json", 'utf8'))["tags"].join(", ")
const seo = fs.readFileSync("templates/games-seo.mdx", 'utf8')

fs.readFile("configs/games-metadata.json", 'utf8', function (err, data) {
    if (err) {
        return console.error(err)
    }
    const json = JSON.parse(data)
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

    json.forEach(function(val) {
        let id = val["id"]
        let games = val.hasOwnProperty("games") ? val["games"] : ""
        let path = val["path"]
        let name = val["name"]

        fs.writeFileSync(paths[0] + (games != "" ? "launchers/" : "") + path + ".mdx", temp.replaceAll("$tags", seo).replaceAll("$tags", tags).replaceAll("$id", id).replaceAll("$path", path).replaceAll("$name", name), 'utf8')
    })

    temp = fs.readFileSync("templates/status-all.mdx", 'utf8')
    fs.writeFileSync(paths[0] + "status.mdx", temp)
})