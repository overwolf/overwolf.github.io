// paraphrased from https://stackoverflow.com/a/50559862

const { execSync } = require('child_process')
const fs = require('fs')
const exec = require('child_process').exec

const scriptsFolder = './generators/' // add your scripts to folder named scripts

const files = fs.readdirSync(scriptsFolder) // reading files from folders

fs.writeFileSync('./configs/clear.cfg', "", 'utf8');

const funcs = files.filter(function (file){
  if(file.endsWith(".js")) return true;
  return false;
}).forEach(function(file) {
  execSync(`node ${scriptsFolder}${file}`, {stdio: 'inherit'} ) // execute node command
})