//process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api');
const cats = require('cats-js');
const token = require('./config/tokensFile.js');

const bot = new TelegramBot(token, {polling: true, filepath: false});

var mimimimi = false;
var c = new cats();

/*
bot.onText(/#pobreJA/i, (msg) => {
  bot.sendMessage(msg.chat.id, 'Right, pobre JA');
});

bot.onText(/(ha){2,}/i, (msg) => {
  const buffer = fs.createReadStream(path.join(__dirname, 'assets/denver.mp3'));
  const fileOptions = {
      filename: 'denver',
      contentType: 'audio/mpeg'
    };
  bot.sendAudio(msg.chat.id, buffer, {}, fileOptions);
});

bot.onText(/Nairobi/i, (msg) => {
  bot.sendPhoto(msg.chat.id, 'https://78.media.tumblr.com/5bffbb68b5d6e013055c75d3cd1c1a74/tumblr_inline_p3dn1ilTXM1slycl1_540.png');
});

bot.onText(/Berlin|Berlín/i, (msg) => {
  bot.sendPhoto(msg.chat.id, 'https://ia.media-imdb.com/images/M/MV5BNGM3NmFiMDUtNWJjMS00YjhiLWEzZjAtOTM3NGMxYjIwNGExXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UY268_CR148,0,182,268_AL_.jpg');
});

bot.onText(/cat|gato/i, (msg) => {
  c.get().then((cat) => {
    bot.sendPhoto(msg.chat.id, cat.images.image.url);
  });
});

bot.onText(/perro|perrete|dog/i, (msg) => {
  this.getDog().then((dog) => {
    bot.sendPhoto(msg.chat.id, dog.message);
  });
});

bot.onText(/JA{2,}|@mundakazgz/, (msg) => {
  const buffer = fs.createReadStream(path.join(__dirname, 'assets/jay.mp3'));
  const fileOptions = {
    filename: 'jay',
    contentType: 'audio/mpeg'
  };
  bot.sendAudio(msg.chat.id, buffer, {}, fileOptions);
});

bot.onText(/\/joke/i, (msg) => {
  this.getJoke().then((joke) => {
    bot.sendMessage(msg.chat.id, `Here is a joke: ${joke}`);
  })
});

bot.onText(/mimimi\son/, (msg) => {
  mimimimi = true;
});

bot.onText(/mimimi\soff/, (msg) => {
  mimimimi = false;
});

bot.onText(/can I .*\?/ig, (msg) => {
 bot.sendMessage(msg.chat.id, 'Claro que si, guapi');
});

bot.onText(/GDPR/ig, (msg) => {
    bot.sendMessage(msg.chat.id, 'https://st-listas.20minutos.es/images/2014-01/376255/4323065_640px.jpg?1390762051');
});

bot.onText(/drama/ig, (msg) => {
    bot.sendMessage(msg.chat.id, 'https://s3.eestatic.com/2017/12/05/social/Diego_Velazquez-Youtube-Memes-Humor-La_Jungla_267234003_56482105_854x640.jpg');
});

bot.onText(/lo sabe dios|#losabedios/ig, (msg) => {
    bot.sendPhoto(msg.chat.id, 'https://vignette.wikia.nocookie.net/inciclopedia/images/9/99/Jesús_colega.jpg/revision/latest/scale-to-width-down/250?cb=20070121234030');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if(mimimimi) {
      bot.sendMessage(chatId, msg.text.replace(/[aeou]/ig,'i'));
  }

});

this.getJoke = function() {
    const SERVICE_URL = 'https://icanhazdadjoke.com';
    return new Promise(function(resolve, reject) {
        request(SERVICE_URL, { json: true }, (err, res, body) => {
            if (err) { reject(err); }
            resolve(res.body.joke);
        });
    });
}

this.getDog = function() {
  const SERVICE_URL = 'https://dog.ceo/api/breeds/image/random';
  return new Promise(function(resolve, reject) {
      request(SERVICE_URL, { json: true }, (err, res, body) => {
          if (err) { reject(err); }
          resolve(res.body);
      });
  });
}

*/