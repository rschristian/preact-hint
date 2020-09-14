# Contributing

These are mostly just notes for myself at this moment, though this can be done properly at a later date if needed

 - Removed line `"sideEffects": false` from [package.json](package.json) before building, otherwise CSS won't be included
 - GH Pages will, for some reason, not operate as expected with Preact's file hrefs. Covert `/...` to `./...`. Seems to fix things.
