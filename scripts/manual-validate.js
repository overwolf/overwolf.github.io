// paraphrased from https://stackoverflow.com/a/50559862

const fs = require('fs')
const exec = require('child_process').exec

const scriptsFolder = './validators/manual/' // add your scripts to folder named scripts

const files = fs.readdirSync(scriptsFolder).map(function(file){
    return scriptsFolder + file
}) // reading files from folders
files.push("validate.js")

const funcs = files.filter(function (file){
  if(file.endsWith(".js")) return true;
  return false;
}).forEach(function(file) {
  execSync(`node ${scriptsFolder}${file}`, {stdio: 'inherit'} ) // execute node command
})