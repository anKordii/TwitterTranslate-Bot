var jsonText = {
    created_at: 'Wed Mar 03 09:01:23 +0000 2021',
    id: 1367037374367207400,
    id_str: '1367037374367207424',
    text: ' jeden dwa trzy',
    source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
    truncated: false,
        user: {
      id: 1035838329110110200,
      id_str: '1035838329110110208',
      name: 'χanax',
      screen_name: 'XanaxWasTaken',
      location: 'Poland',
      url: 'http://xayooindustries.us',
      description: 'bez mózg\n\nwtyczka do przeglądarek\nhttp://wtyczka.xayooindustries.us',
      translator_type: 'none',
      protected: false,
      verified: false,
      followers_count: 4,
      friends_count: 25,
      listed_count: 0,
      favourites_count: 103,
      statuses_count: 132,
      created_at: 'Sat Sep 01 10:34:37 +0000 2018',
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      profile_background_color: '000000',
      profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_link_color: '91D2FA',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      profile_image_url: 'http://pbs.twimg.com/profile_images/1344386356370415617/sLUAJVyy_normal.jpg',
      profile_image_url_https: 'https://pbs.twimg.com/profile_images/1344386356370415617/sLUAJVyy_normal.jpg',
      profile_banner_url: 'https://pbs.twimg.com/profile_banners/1035838329110110208/1611917357',
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null
    },
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    quoted_status_id: 1367020235551817700,
    quoted_status_id_str: '1367020235551817728',
    is_quote_status: true,
    quote_count: 0,
    reply_count: 0,
    retweet_count: 1,
    favorite_count: 0,
    entities: { hashtags: [], urls: [], user_mentions: [], symbols: [] },
    favorited: false,
    retweeted: false,
    filter_level: 'low',
    lang: 'pl',
    timestamp_ms: '1614762083032'
  };
  dev(jsonText)
function dev(tweet){
    if(tweet.in_reply_to_status_id === null && tweet.user.screen_name == 'XanaxWasTaken'){
        console.log(tweet.retweet_count)

        if(tweet.retweet_count > 0) return;

        if(tweet.text.startsWith('RT') === false){
            if(!tweet.extended_tweet){
                reply(tweet.text, tweet.id_str, tweet.user.screen_name)
            }else{
                reply(tweet.extended_tweet.full_text, tweet.id_str, tweet.user.screen_name)
            }
        }
    }else{
        if(tweet.user.screen_name == 'XanaxWasTaken'){

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
}

function reply(text, id_str, screen_name){

    console.log(`» Aktywowanie funkcji reply (${text}) [${getActualTime()}]`)
}

function getActualTime(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    return `${year}-${month}-${day}`;
}