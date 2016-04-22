var fs = require('fs'),
    _ = require('lodash'),
    lbl = require('line-by-line'),
    csvReader = new lbl('translations.csv'),
    jsonObject = {};

csvReader.on('error', function (err) {
    console.log(err);
});

csvReader.on('line', function (line) {
    var array;
    if (line.indexOf('key') === 0) {
        //skip
    } else {
        array = line.split('|');
        jsonObject[array[0]] = {
            "de": array[1],
            "fr": array[2],
            "it": array[3]
        }
    }
});

csvReader.on('end', function () {
    //remember: master of translated texts is the csv file,
    // BUT: later added entries in the original translations.json have to be re-merged into the new transation.json file
    fs.readFile('../translations/translations.json', 'utf8', function (err, originalData) {
        var originalJsonObject = JSON.parse(originalData);
        _.forEach(originalJsonObject, function (value, key) {
            if (jsonObject[key] === undefined) {
                jsonObject[key] = value;
            }
        });
        fs.writeFile('../translations/translations.json', JSON.stringify(jsonObject), 'utf8');
    });


});


