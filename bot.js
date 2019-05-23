'use strict';
require('dotenv').config();
var fs = require('fs');
const https = require('https');
console.log('Loaded... ');
var groupid, array;

/**
 * TO DO:
 * 
 * Add support for multiple URL's posted                        --IN PROGRESS--
 * Reject Groupme URL's to prevent "Event" thumbnail spamming   --IN PROGRESS--
 * 
 */

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
            var part4 = part3.replace(/(\n\r|\n|\r)/gm," ");
            var part5 = part4.split(' ');
            var count = part5.length;
            array = [];
            var url = 0;
            var i;
            for (i = 0; i <= count; i++) {
                if (urlex.test(part5[i]) || url2ex.test(part5[i])) {
                    array.push(part5[i]);
                    url++;
                }
            }
            if (url > 1) {
                return array;
            }
            if (url == 1) {
                return stringify(array[0]);
            }
            else {
                console.log('nothing found');
                return null;
            }
        }

        const messageText = message.text;
        const messageName = message.name;
        groupid = message.group_id;

        // EXPRESSION LIST
        const nameex = /Thumbnail-Maker/i
        const urlex = /https\:/i;
        const url2ex = /http\:/i;
        const spaceex = / /;

        // BOT LOGIC - Checks if bot triggered bot, and if message has content, then splits every word into matrix before identifying URL
        if (messageText)
        {
            if (nameex.test(messageName)) {
                console.log('bot trigger by bot... ignoring.')
                return null;
            }
            else {
                if (urlex.test(messageText) || url2ex.test(messageText)) {
                    if (spaceex.test(messageText)) {
                        return count_words(messageText);
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
        }
        return null;
    };

    static sendMessage(mText) {

        var botId = "df420d9c0411f0ca5610322cd8";

        if (/41279538/.test(groupid)) {
            botId = '601e4bbefc3526e61596f8bbf6';
        }

        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method :'POST'
        };
        var loop;
        for (loop = -0; loop <= array.length; loop++) {
            var tick = function (loop) {
                return function () {
                    const body = {
                        bot_id: botId,
                        text: array[loop]
                    };
                    const botReq = https.request(options, function(response) {
                        if (response.statusCode !== 202) {
                            console.log('Bad status '+response.statusCode);
                        }
                    });
                    botReq.on('error', function(err) {
                        console.log('Error '+JSON.stringify(err));
                    });
                    botReq.on('timeout', function(err) {
                        console.log('Timeout '+JSON.stringify(err));
                    });
                    botReq.end(JSON.stringify(body));
                };
            }
            setTimeout(tick(loop), 500 * loop);
        }
    }
};
module.exports = Bot;