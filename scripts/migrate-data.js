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
    try {
        const obj = JSON.parse(fs.readFileSync(file));
        const match = /^data\/(.+?)\//.exec(file);
        const data_type = match ? match[1] : 'null';
        if(obj.icon) delete obj.icon;
        if(obj.tooltip) { obj.description = obj.tooltip; delete obj.tooltip; }
        fs.writeFileSync(file, JSON.stringify(obj, null, 4));
    } catch (e) {
        console.error(e);
        process.exit();
    }
}