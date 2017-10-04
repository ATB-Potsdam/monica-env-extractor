# monica-env-extractor
Extract all subobjects from a [MONICA](https://github.com/zalf-lsa/monica) "env" JSON to separate files.
This tool is intended to support debugging [MONICA](https://github.com/zalf-lsa/monica) input data
All files are created in current working directory following this scheme (input is env-test.json):
- env-test_climate.json
- env-test_soil.json
- env-test_site.json
- env-test_userParameters.json


## Quick start
- install node.js
- run ```node monica-env-extractor.js env-test.json```
