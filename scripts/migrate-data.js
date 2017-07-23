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
        /**
         * @type { { icon: string, stats_granted: string[], stats_values: number[] } }
         */
        const obj = JSON.parse(fs.readFileSync(file));
        const match = /^data\/(.+?)\//.exec(file);
        const data_type = match ? match[1] : 'null';
        if(obj.icon != undefined) delete obj.icon; // now generated
        if(obj.id != undefined) delete obj.id; // ids are filenames
        if(obj.type != undefined) obj.type = obj.type.toLocaleLowerCase(); // enforce lowercase
        // powers
        if(obj.tooltip != undefined) { obj.description = obj.tooltip; delete obj.tooltip; } // tooltip -> description
        if(obj.sources != undefined) obj.sources = obj.sources.map(a => {
            if(a.sub_type) delete a.sub_type; // remove unnecessary sub_types
            if(a.type) { a.data_type = a.type; delete a.type; } // migrate: type -> data_type in power sources
            return a;
        });
        if(obj.cast_type != undefined) obj.cast_type = obj.cast_type.toLocaleLowerCase(); // enforce lowercase
        if(obj.targeting != undefined) obj.targeting = obj.targeting.toLocaleLowerCase(); // enforce lowercase
        // disciplines
        if(obj.stats_granted != undefined) { // migrates stats
            obj.stats = obj.stats_granted.map((v, i) => { return { name: v, value: obj.stats_values[i] } });
            delete obj.stats_granted;
            delete obj.stats_values;
        }
        if(obj.equips_granted != undefined) { obj.equips = obj.equips_granted; delete obj.equips_granted; } // equips_granted -> equips
        if(obj.trays_granted != undefined) { obj.tray_granted = obj.trays_granted; delete obj.trays_granted; } // trays_granted -> tray_granted
        if(obj.trays_removed != undefined) { obj.tray_removed = obj.trays_removed; delete obj.trays_removed; } // trays_removed -> tray_removed
        fs.writeFileSync(file, JSON.stringify(obj, null, 4));
    } catch (e) {
        console.error(e);
        process.exit();
    }
}