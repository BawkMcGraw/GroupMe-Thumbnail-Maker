# GroupMe Thumbnail Maker V3
This bot was excludively created to solve a problem that the GroupMe dev team stated, and I quote, "is by design". What problem you ask? If you post a url in a message that includes other text such as:

### "Guys! Check out this link: https://gravitycatpro.com"

Then, GroupMe on iOS will not post the thumbnail of the url, like it would, had you posted just the URL by itself. This bug, or "design" is not present on Android. Regardless of text or not, the url gets a generated thumbnail.

This bot aims to solve that problem while remaining as simple and efficient as possible. If simply splits every word in a matrix, then analyzes every word for "https://" or "http://" and then reposts the url it discovered without any other text so GroupMe will generate a thumbnail.

This bot works without using a module that detects and pulls urls, since they don't always work, and they're a bit heavy for this use case. This is by no means a perfect system, but it's the most lightweight option I could think of.

This bot also works with several groups at a time, so if you want to add this to several groups, you do not need to make several instances and versions of this app. Just add your new groupID and botID as vars, then copy and paste the chunk for as many groups as needed.

## Features
* Posts URLS found in messages by themselves so groupme will create a proper thumbnail
* Detects groupme polls and videos to prevent thumbnail spam
* Optimized for my E3 bot to prevent spam
* Supports multiple urls in the same message

## To-Do
* Make an easy way to disable multi-url support
* Create an easy-to-use blacklist of people/urls that will not be thumbnailed

Enjoy!

## License

[GNU GPLv3 License](LICENSE.txt)
