'use strict';
require('dotenv').config();
var fs = require('fs');
const https = require('https');
console.log('Loaded... ');
console.log(process.env.BOT_ID);
console.log(process.env.BOT_ID1);
var date = new Date();
var today = date.getDate();
var day,groupid;

class Bot {
    /**
     * Called when the bot receives a message.
     *
     * @static
     * @param {Object} message The message data incoming from GroupMe
     * @return {string}
     */
    static checkMessage(message) {
        function count_words(raw) {
            var part1 = raw.replace(/(^\s*)|(\s*$)/gi,"");
            var part2 = part1.replace(/[ ]{2,}/gi," ");
            var part3 = part2.replace(/\n /,"\n");
            var final = part3.split(' ').length;
            return toString(final);
        }

        const messageText = message.text;
        const messageName = message.name;

        // Learn about regular expressions in JavaScript: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions
        const nameex = /Thumbnail-Maker/i
        const urlex = /https\:/i;
        const spaceex = / /;
        groupid = message.group_id;

        // Check if the GroupMe message has content and if the regex pattern is true
        if (messageText)
        {
            if (nameex.test(messageName)) {
                console.log('bot trigger by bot... ignoring.')
                return null;
            }
            else {
                if (urlex.test(messageText)) {
                    if (spaceex.test(messageText)) {
                        console.log('space detected');
                        count_words(messageText);
                    }
                    else {
                        console.log('no space detected');
                    }
                }
                else {
                    return null;
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
        const botId0 = null;
        const botId1 = "601e4bbefc3526e61596f8bbf6";
        var botId;
        const main = /27754904/;
        const g2 = /41279538/;
        console.log('groupid')

        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };
        if (main.test(groupid)) {
            botId = botId0;
        }
        if (g2.test(groupid)) {
            botId = botId1;
        }
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
