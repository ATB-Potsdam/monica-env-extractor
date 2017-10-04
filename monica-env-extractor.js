#!/usr/bin/env node

var fs= require('fs');
var path= require('path');
var util= require('util');


var subObjects= {
    climateData: 'climateData.data',
    cropRotation: 'cropRotation',
    simulationParameters: 'params.simulationParameters',
    siteParameters: 'params.siteParameters',
    userCropParameters: 'params.userCropParameters',
    userEnvironmentParameters: 'params.userEnvironmentParameters',
    userSoilMoistureParameters: 'params.userSoilMoistureParameters',
    userSoilOrganicParameters: 'params.userSoilOrganicParameters',
    userSoilTemperatureParameters: 'params.userSoilTemperatureParameters',
    userSoilTransportParameters: 'params.userSoilTransportParameters',
}


if (process.argv.length < 3) {
    console.log('argument env.json required, exiting.');
    return process.exit()
}
if (!fs.existsSync(process.argv[2])) {
    console.log('file does not exists or not readable: "' + process.argv[2] + '", exiting.');
    return process.exit()
}

var envFile= path.resolve(process.argv[2]);
var outFile= path.basename(envFile, '.json');
console.log('trying to parse: ' + envFile);


try {
    var env= require(envFile);
} catch (e) {
    console.log('file does not contain valid JSON, parser error:');
    console.log(util.inspect(e, false, 4));
    return process.exit()
}

for (var subObject in subObjects) {
    var o= env;
    subObjects[subObject].split('.').forEach(function(p) {
        o= o[p];
    });
    var outFileName= outFile + '_' + subObject + '.json';
    console.log('writing ' + outFileName);
    fs.writeFileSync(outFileName, JSON.stringify(o));
}
