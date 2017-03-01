const fs = require('fs');
var Twitter = require('twitter');

var sKeys = fs.readFileSync('keys.json', 'utf-8');
var oKeys = JSON.parse(sKeys);

var config = {
    consumer_key: oKeys.TWITTER_CONSUMER_KEY,
    consumer_secret: oKeys.TWITTER_CONSUMER_SECRET,
    access_token_key: oKeys.TWITTER_ACCESS_TOKEN_KEY_GOODER,
    access_token_secret: oKeys.TWITTER_ACCESS_TOKEN_SECRET_GOODER
};

var client = new Twitter(config);

var sApiCall = 'favorites/list'

client.get(sApiCall, function(error, tweets, response) {
    if (error) {
        console.log(error);
        throw error;
    }

    var sFilenameBase = 'tweets',
        sSuffix = 'txt',
        sDir = 'store';
    var sFilename = sDir + '/' + sFilenameBase + '.' + sSuffix;

    var n = 0;
    while(fs.existsSync(sFilename)) {
        n++;
        sFilenameBase = sFilenameBase + n;
        sFilename = sDir + '/' + sFilenameBase + '.' + sSuffix;
    }

    fs.writeFileSync(sFilename, sApiCall);
    fs.writeFileSync(sFilename, tweets);
});
