var fs = require('fs'),
    _ = require('lodash');

fs.readFile('../translations/translations.json', 'utf8', function (err, originalData) {
    var DELIM = '|',
        ENDOFLINE = '\n',
        translationsJson = JSON.parse(originalData),
        csvWriter = fs.createWriteStream('translations.csv');

    if (err) {
        console.log(err);
        return;
    }

    csvWriter.write('key');
    csvWriter.write(DELIM);
    csvWriter.write('de');
    csvWriter.write(DELIM);
    csvWriter.write('fr');
    csvWriter.write(DELIM);
    csvWriter.write('it');
    csvWriter.write(DELIM);
    csvWriter.write(ENDOFLINE);

    _.forEach(translationsJson, function (value, key) {
        csvWriter.write(key);
        csvWriter.write(DELIM);
        _.forEach(translationsJson[key], function (translation, language) {
            csvWriter.write(translation);
            csvWriter.write(DELIM);
        });
        csvWriter.write(ENDOFLINE);
    });

    csvWriter.end();


});