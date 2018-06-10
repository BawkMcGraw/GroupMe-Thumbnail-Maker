'use strict';
require('dotenv').config();
var fs = require('fs');
const https = require('https');
console.log('Loaded... ')
console.log(process.env.BOT_ID)

class Bot {
    /**
     * Called when the bot receives a message.
     *
     * @static
     * @param {Object} message The message data incoming from GroupMe
     * @return {string}
     */
    static checkMessage(message) {
        const messageText = message.text;
        const messageName = message.name;

        // Learn about regular expressions in JavaScript: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions
        const e3ex = /e3/i;
        const name = /info/i;
        const nameex = /E3 Kiosk/;
        const thanks = /thank/i;

        // Check if the GroupMe message has content and if the regex pattern is true
        if (messageText)
        {
            if (nameex.test(messageName)) {
                console.log('bot trigger by bot... ignoring.')
                return null;
            }
            else {
                if (name.test(messageText)) {
                if (e3ex.test(messageText)) {
                    console.log('e3 found')
                    const microsoft = /microsoft/i;
                    const bethesda = /bethesday/i;
                    const devolver = /devolver/i;
                    const sony = /sony/i;
                    const ubisoft = /ubisoft/i;
                    const enix = /enix/i;
                    const pc = /pc/i;
                    const ea = /ea/i;
                    if (microsoft.test(messageText)) {
                        return 'Microsoft\'s E3 conference is Sunday at 3PM \(1PM PT\). Will yooOOoOou be watching? I will at https://mixer.com/xbox';
                    }
                    if (bethesda.test(messageText)) {
                        return 'Bethesda\'s E3 is Sunday at 8\:30PM \(6\:30PM\). Will yooOOoOou be watching? I will at https://twitch.tv/bethesda/profile';
                    }
                    if (devolver.test(messageText)) {
                        return 'Devolver Digital\'s E3 is today at 10PM \(8PM PT\). Will yooOOoOou be watching? I will at https://twitch.tv/devolverdigital';
                    }
                    if (sony.test(messageText)) {
                        return 'Sony\'s E3 is Monday at 8PM \(6PM PT\). Will yooOOoOou be watching? I will at https://twitch.tv/playstation';
                    }
                    if (ubisoft.test(messageText)) {
                        return 'Ubisoft\'s E3 is Monday at 3PM \(1PM PT\). Will yooOOoOou be watching? I will at https://twitch.tv/ubisoft';
                    }
                    if (enix.test(messageText)) {
                        return 'Square Enix\'s E3 is Monday at 12PM \(10AM PT\) Will yooOOoOou be watching? I will at https://twitch.tv/squareenix';
                    }
                    if (pc.test(messageText)) {
                        return 'PC Gaming Show E3 is Monday at 5PM \(3PM PT\). Will yooOOoOou be watching? I will at https://twitch.tv/pcgamer';
                    }
                    if (ea.test(messageText)) {
                        return 'EA\'s E3 already happened but can be viewed at https://youtu.be/gw16v3oGXso';
                    }
                    if (thanks.test(messageText)) {
                        return 'Of course!'
                    }
                }
            }
        }
        }
        return null;
    };
    /**
     * Sends a message to GroupMe with a POST request.
     *
     * @static
     * @param {string} messageText A message to send to chat
     * @return {undefined}
     */
    static sendMessage(messageText) {
        // Get the GroupMe bot id saved in `.env`
        const botId = process.env.BOT_ID;

        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };

        const body = {
            bot_id: botId,
            text: messageText
        };

        // Make the POST request to GroupMe with the http module
        const botRequest = https.request(options, function(response) {
            if (response.statusCode !== 202) {
                console.log('Rejecting bad status code ' + response.statusCode);
            }
        });

        // On error
        botRequest.on('error', function(error) {
            console.log('Error posting message ' + JSON.stringify(error));
        });

        // On timeout
        botRequest.on('timeout', function(error) {
            console.log('Timeout posting message ' + JSON.stringify(error));
        });

        // Finally, send the body to GroupMe as a string
        botRequest.end(JSON.stringify(body));
    };
};
module.exports = Bot;
