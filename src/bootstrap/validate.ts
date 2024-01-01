// // paraphrased from https://stackoverflow.com/a/50559862

// const fs = require('fs')
// const exec = require('child_process').exec

// const enforce = process.argv.includes("-f") != undefined
// const write = process.argv.includes("-w") != undefined

// const scriptsFolder = './validators/' // add your scripts to folder named scripts

// const files = fs.readdirSync(scriptsFolder) // reading files from folders
// const funcs = files.filter(function (file){
//     if(file.endsWith(".js")) return true;
//     return false;
//   }).forEach(function(file) {
//     execSync(`node ${scriptsFolder}${file}`, {stdio: 'inherit'} ) // execute node command
//   })