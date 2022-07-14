// paraphrased from https://stackoverflow.com/a/50559862

const fs = require('fs')
const exec = require('child_process').exec

const async = require('async') // npm install async 
const enforce = process.argv.includes("-f") != undefined
const write = process.argv.includes("-w") != undefined

const scriptsFolder = './validators/' // add your scripts to folder named scripts

const files = fs.readdirSync(scriptsFolder) // reading files from folders
const funcs = files.filter(function (file){
  if(file.endsWith(".js")) return true;
  return false;
}).map(function(file) {
  return exec.bind(null, `node ${scriptsFolder}${file}`) // execute node command
})

function getResults(err, data) {
  if (!enforce && err) {
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