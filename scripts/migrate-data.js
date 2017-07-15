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
        if(obj.id) delete obj.id;
        if(obj.type) obj.type = obj.type.toLocaleLowerCase();
        // powers
        if(obj.sources) obj.sources = obj.sources.map(a => {
            if(a.sub_type) delete a.sub_type;
            return a;
        });
        if(obj.cast_type) obj.cast_type = obj.cast_type.toLocaleLowerCase();
        if(obj.targeting) obj.targeting = obj.targeting.toLocaleLowerCase();
        fs.writeFileSync(file, JSON.stringify(obj, null, 4));
    } catch (e) {
        console.error(e);
        process.exit();
    }
}