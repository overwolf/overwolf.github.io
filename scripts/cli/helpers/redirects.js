// WARNING! THIS CODE IS NAIVE! IT CANNOT HANDLE COMPLICATED LOOPS. MAKE SURE YOU COMMIT YOUR MOVEMENTS REGULARLY

import fs from "fs"
const redirectsPath = "../website/hierarchies/redirects.json";
const tempRedirectsPath = "cli/helpers/temp-redirects.json";


function ReadFile(path){
    return JSON.parse(fs.readFileSync(path, 'utf8'))
}

function WriteToFile(path, content){
    fs.writeFileSync(path, JSON.stringify(content, undefined, 4), 'utf8');
}

export function Commit(){
    const tempRedirects = ReadFile(tempRedirectsPath)
    const redirects = []
    Object.keys(tempRedirects.to).forEach(movement => {
        redirects.push(
            {
                to: movement,
                from: tempRedirects.to[movement]
            }
        )
    });
    WriteToFile(redirectsPath, redirects);
    GenerateTemp();
}

export function RevertAll(){
    GenerateTemp();
}

function GenerateTemp(){
    const redirects = ReadFile(redirectsPath)
    const tempRedirects = {
        to: {},
        from: {}
    }
    redirects.forEach(redirect => {
        if(tempRedirects.to[redirect.to] != undefined) console.error(`DUPLICATE DETECTED LEADING TO: ${redirect.to} FROM: ${redirect.from}. CURRENTLY HAS ${tempRedirects.to[redirect.to]}`)
        if(!Array.isArray(redirect.from)) redirect.from = [redirect.from]
        if(tempRedirects.to[redirect.to] === undefined) tempRedirects.to[redirect.to] = []
        tempRedirects.to[redirect.to].push(...redirect.from)
        redirect.from.forEach(from => {
            if(tempRedirects.from[from] !== undefined) console.error(`DUPLICATE DETECTED LEADING FROM: ${from} TO: ${redirect.to}`)
            tempRedirects.from[from] = redirect.to
        });
    });
    WriteToFile(tempRedirectsPath, tempRedirects)
}

function FlattenIntoTemp(item, tempRedirects){
    var to = item.to; // new target
    var from = item.from; // old target
    var rFrom = tempRedirects.from; // old -> new targets
    var rTo = tempRedirects.to; // new -> old targets

    if(rFrom[to] === from){
        delete rFrom[to]
        var toRemove = rTo[from]
        toRemove.splice(toRemove.indexOf(to), 1)
        if(toRemove.length === 0) delete rTo[from]
    } else {
        if(from === to) return;
        rFrom[from] = to;
        if(rTo[to] === undefined) rTo[to] = []
        if(!rTo[to].includes(from)) rTo[to].push(from)
    }
}

export function Move(movements){
    const tempRedirects = ReadFile(tempRedirectsPath)
    movements.forEach(movement => {
        FlattenIntoTemp(movement, tempRedirects)
    });
    WriteToFile(tempRedirectsPath, tempRedirects);
}
