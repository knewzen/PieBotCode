var Jimp = require("jimp");
exports.run = function(client, message, args) {
      let imageurl = args[0] === undefined ? message.attachments.first() : { url: args[0] };

      if (imageurl === undefined) {
          message.channel.send("**Please attach an image, or give a url to an image**");
          return;
      }

      imageurl = imageurl.url;

      var watermark;

Jimp.read("./res/top10.png").then(function (image) {
    watermark = image.opacity(1);
      });

      Jimp.read(imageurl).then(function (image) {
        image.size(20%)
          image.composite(watermark, 0, 0)
              .getBuffer(Jimp.MIME_PNG, (error, buffer) => {
                  message.channel.send("", {
                      files: [{
                          attachment: buffer,
                          name: "top10.png"
                      }]
                  });
              });
      });
  }
