// paraphrased from https://stackoverflow.com/a/50559862

const fs = require('fs')
const exec = require('child_process').exec

const async = require('async') // npm install async 

const scriptsFolder = './validators/manual/' // add your scripts to folder named scripts

const files = fs.readdirSync(scriptsFolder).map(function(file){
    return scriptsFolder + file
}) // reading files from folders
files.push("validate.js")
const funcs = files.filter(function (file){
  if(file.endsWith(".js")) return true;
  return false;
}).map(function(file) {
  return exec.bind(null, `node ${file}`) // execute node command
})

function getResults(err, data) {
  if (err) {
    return console.error(err)
  }
  const results = data.map(function(lines){
    return lines.join('') // joining each script's lines
  })
  let toClear = results.join('').trimEnd()

  return console.log(toClear.replace(/\.\.\/website/gm, 'Generated: '))
}
// to run your scipts in series use
async.series(funcs, getResults)