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

function fill(data_type, obj) {
    obj.id = obj.id || '';
    obj.name = obj.name || '';
    obj.description = obj.description || '';
    obj.tags = obj.tags || [];
    if (data_type === 'class') {
        obj.races = obj.races || [];
        obj.powers = obj.powers || [];
    } else if(data_type === 'discipline') {
        obj.equips_granted = obj.equips_granted || [];
        obj.powers = obj.powers || [];
        obj.slots_granted = obj.slots_granted || [];
        obj.slots_removed = obj.slots_removed || [];
        obj.stats_granted = obj.stats_granted || [];
        obj.stats_values = obj.stats_values || [];
        obj.trays_granted = obj.trays_granted || '';
        obj.trays_removed = obj.trays_removed || '';
        obj.type = obj.type || '';
    } else if(data_type === 'power') {
        obj.cast_type = obj.cast_type || '';
        obj.cooldown = obj.cooldown || 0;
        obj.cost = obj.cost || [];
        obj.duration = obj.duration || 0;
        obj.max_targets = obj.max_targets || 0;
        obj.next_chain = obj.next_chain || [];
        obj.previous_chain = obj.previous_chain || [];
        obj.range = obj.range || 0;
        obj.sources = obj.sources || [];
        obj.targeting = obj.targeting || '';
        obj.type = obj.type || '';
    }
}

for(const file of walk('data')) {
    try {
        const obj = JSON.parse(fs.readFileSync(file));
        const match = /^data\/(.+?)\//.exec(file);
        const data_type = match ? match[1] : 'null';
        fill(data_type, obj);
        fs.writeFileSync(file, JSON.stringify(obj, null, 4));
    } catch (e) {
        console.error(e);
        process.exit();
    }
}