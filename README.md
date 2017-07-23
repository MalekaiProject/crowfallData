# crowfallData
The grand repository of all things Crowfall. JSON objects for each recipe, race, class, power, discipline and more. For use with public API projects.

This data will be used to power the unofficial Crowfall API project Malekai.

https://github.com/TheObsidian/malekaiAPI
https://github.com/TheObsidian/malekaiDiscord
as well as the powering https://crowfall.wiki

Many thanks goes out to community contributors to this project, at the time of this update:
Scree, Michael Fedora, [LOD] Will, Remm, That_Eriksson, Typ3cast

## Folder Structure
- `data`: Root folder
  - `class`: All the classes, with the class data model
  - `discipline`: All of the disciplines *and* races, which all adhere to the discipline data model
    - `{subtype}`: Extra organization, for `major`, `minor`, `weapon`, and `race` types
  - `power`: All of the powers

## Data Schemes

See [DATA_SCHEMES.md](DATA_SCHEMES.md);

## Scripts

All scripts are written using standard Node v8 JS, no libraries needed.

### fill-fields.js
Fills the fields of the data objects to *at least* a default value;

**USAGE**: `node scripts/fill-fields.js`

### tagging.js
Output possible matches for tagging lexicon.

**USAGE**: `node scripts/tagging.js`

### validate.js
Checks the json data for valid data types.  Validates correct cast, targetting, and type values are used, prevents from mispellings. Checks that all items in `powers` node actually exist.

**USAGE**: `node scripts/validate.js`

### validate-ids.js
Validates the ids for all the files in the data directory. If there are errors,
it will print them to stderr and write them to a "id-errors.txt" file.

**USAGE**: `node scripts/validate-ids.js`

### migrate-data.js
Migrates old data models to newer ones.

**USAGE**: `node scripts/migrate-data.js`
