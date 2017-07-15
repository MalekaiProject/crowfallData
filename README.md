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
