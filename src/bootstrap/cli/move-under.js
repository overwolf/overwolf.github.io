import fs from "fs"
import path from "path"
const docsPath = "../website/pages/docs/"
const params = [...process.argv]
params.splice(0, 2);

if(params.includes("--help")){
    console.log(`- Moves one or more files to sit under a new path. Paths are docs-relative, and should be supplied like so: (targetDir, toMove...)
    Ending a toMove with the .children suffix, will cause all of its children to be moved, and it will be deleted.
    `);
    process.exit();
}
if(params.length < 2) throw new Error("Must supply at least two paths! (targetDir, toMove...)")
const target = params.splice(0, 1);

console.log(fs.readdirSync(docsPath))
const movedRaw = []

params.forEach(parent => {
    const moveParent = !parent.endsWith(path.sep)
    if(moveParent) {
        const parentPathOld = path.join(docsPath, parent)
        const parentPathNew = path.join(docsPath, target, path.basename(parent))
        fs.renameSync(parentPathOld, parentPathNew)
        movedRaw.push({old: parentPathOld, new: parentPathNew})
    }
    else {
        fs.readDirSync(path.join(docsPath, parent)).forEach(child => {
            const childPathOld = path.join(docsPath, parent, child)
            const childPathNew = path.join(child, target, child)
            fs.renameSync(childPathOld, childPathNew)
            movedRaw.push({old: childPathOld, new: childPathNew})
        });
        // delete old parent
    }
    // now recursively iterate over ALL files
    // Every .mdx file should be:
    //   noted down in "temp-moved-files.json"s
    //   applied into a list for a redirects move operation
});





console.log(fs.readdirSync(path.join(docsPath, target)))



console.log(fs.readdirSync(path.join(docsPath, params[0])))
