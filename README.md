# monica-env-extractor
Extract all subobjects from a [MONICA](https://github.com/zalf-lsa/monica) "env" JSON to separate files.
This tool is intended to support debugging [MONICA](https://github.com/zalf-lsa/monica) input data
All files are created in current working directory following this scheme (input is env-test.json):
- env-test_climateData.json
- env-test_cropRotation.json
- env-test_simulationParameters.json
- env-test_siteParameters.json
- env-test_userCropParameters.json
- env-test_userEnvironmentParameters.json
- env-test_userSoilMoistureParameters.json
- env-test_userSoilOrganicParameters.json
- env-test_userSoilTemperatureParameters.json
- env-test_userSoilTransportParameters.json


## Quick start
- install node.js
- run ```node monica-env-extractor.js env-test.json```
