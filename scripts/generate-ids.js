/**
 * Generates ids for all the files in the data directory
 */
const fs = require('fs');

const walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) results = results.concat(walk(file));
        else results.push(file);
    });
    return results;
}

for(const file of walk('data')) {
    console.log('Reading file: ' + file);
    try {
        const obj = JSON.parse(fs.readFileSync(file));
        obj.id = obj.name.toLocaleLowerCase().trim().split(' ').join('-').replace(/[^\w-]/g, '');
        fs.writeFileSync(file, JSON.stringify(obj, null, 4));
    } catch (e) {
        console.error(e);
        process.exit();
    }
}