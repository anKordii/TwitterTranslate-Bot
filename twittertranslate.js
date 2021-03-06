const Twit = require('twit');
const translate = require('@iamtraction/google-translate');
const globalConfig = require('./config/config.js');

var T = new Twit({
  consumer_key:         globalConfig.consumer_key,
  consumer_secret:      globalConfig.consumer_secret,
  access_token:         globalConfig.access_token,
  access_token_secret:  globalConfig.access_token_secret,
  timeout_ms:           10*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
var sleepStatus = false;
console.log(`» Załadowano skrypt twittertranslate.js [${getActualTime()}]`)

//Twitter
var stream = T.stream('statuses/filter', { follow : [globalConfig.TwitterID, globalConfig.AdminTwitterID] });

stream.on('tweet', function (tweet, err) {
    //console.log(tweet)
    if(tweet.in_reply_to_status_id === null && tweet.user.screen_name == globalConfig.TwitterUsername){

        if(tweet.retweet_count > 0) return;

        if(tweet.text.startsWith('RT') === false){
            if(!tweet.extended_tweet){
                reply(tweet.text, tweet.id_str, tweet.user.screen_name)
            }else{
                reply(tweet.extended_tweet.full_text, tweet.id_str, tweet.user.screen_name)
            }
        }
    }else if(tweet.user.screen_name == globalConfig.AdminTwitterUsername){
        if(tweet.text === '!sleep'){
            goSleep()
        }else if(tweet.text === '!status'){

            var res = {
                status: `Aktualny status sleep: ${sleepStatus} @${tweet.user.screen_name}`,
                in_reply_to_status_id: '' + tweet.id_str
            };

            T.post('statuses/update', res,
                function(err, data, response) {
                }
            );
        }

    }else{
        if(sleepStatus === true) return;

        if(tweet.user.screen_name == globalConfig.TwitterUsername){
            
            if(tweet.retweet_count > 0) return;

            if(tweet.text.startsWith('RT') === false){
                if(!tweet.extended_tweet){
                    reply(tweet.text, tweet.id_str, tweet.user.screen_name)
                }else{
                    reply(tweet.extended_tweet.full_text, tweet.id_str, tweet.user.screen_name)
                }
            }
        }
    }
})
function goSleep(){
    if(sleepStatus === false){
        sleepStatus = true

        setTimeout(() => {
            sleepStatus = false
        }, 15 * 60 * 1000);
    }
}
function reply(text, id_str, screen_name){

    translate(text, { from: globalConfig.from, to: globalConfig.to }).then(res => {
    //
    // Domyślny var
    //
    var res = {
        status: `${res.text}  @${screen_name}`,
        in_reply_to_status_id: '' + id_str
    };
    
    //
    // Dodawanie komentarza
    //
    T.post('statuses/update', res,
        function(err, data, response) {
        }
    );

    }).catch(err => {
    //
    // Domyślny var
    //
    var res = {
        status: err+'  @'+screen_name,
        in_reply_to_status_id: '' + id_str
    };
    //
    // Dodawanie komentarza
    //
    T.post('statuses/update', res,
        function(err, data, response) {
        }
    );
    });

    console.log(`» Aktywowanie funkcji reply (${text}) [${getActualTime()}]`)
}

function getActualTime(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    return `${year}-${month}-${day}`;
}