# GroupMe Thumbnail Maker
This bot was excludively created to solve a problem that the GroupMe dev team, and I quote, "is by design". What problem you ask? If you post a url in a message that includes other text such as:

### "Guys! Check out this link: https://gravitycatpro.com"

Then, GroupMe on iOS will not post the thumbnail of the url, like it would, had you posted just the URL by itself. This bug, or "design" is not present on Android. Regardless of text or not, the url gets a generated thumbnail.

This bot aims to solve that problem while remaining as simple and efficient as possible. If simply splits every word in a matrix, then analyzes every word for "https://" or "http://" and then reposts the url it discovered without any other text so GroupMe will generate a thumbnail.

This bot works without using a module that detects and pulls urls, since they don't always work, and they're a bit heavy for this use case. This is by no means a perfect system, but it's the most lightweight option I could think of.

This bot also works with several groups at a time, so if you want to add this to several groups, you do not need to make several instances and versions of this app. Just add your new groupID and botID as vars, then copy and paste the comparitor logic.

Enjoy!

## License

The core funtionality of the bot was written by me, but the http handling was provided by a groupme starter bot. ACM@UC

[GNU GPLv3 License](LICENSE.txt)

* Some content based on [groupme/bot-tutorial-nodejs](https://github.com/groupme/bot-tutorial-nodejs) (MIT License)

![GNU GPLv3 License](https://img.shields.io/github/license/acmatuc/groupme-bot-starter.svg?maxAge=2592000)]()
[![Dependencies Status](https://david-dm.org/acmatuc/groupme-bot-starter/status.svg)](https://david-dm.org/acmatuc/groupme-bot-starter)
[![Dependencies Status](https://david-dm.org/acmatuc/groupme-bot-starter/dev-status.svg)](https://david-dm.org/acmatuc/groupme-bot-starter?type=dev)

> Starter code for the GroupMe bot workshop at ACM@UC
