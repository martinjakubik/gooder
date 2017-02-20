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

client.get('favorites/list', function(error, tweets, response) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log(tweets);
});
