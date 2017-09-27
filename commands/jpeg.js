var Jimp = require("jimp");
exports.run = function(client, message, args) {
  let imageurl = args[0] === undefined ? message.attachments.first() : { url: args[0] };

     if (imageurl === undefined) {
         message.channel.send("**Please attach an image, or give a url to an image**");
         return;
     }

     imageurl = imageurl.url;

     Jimp.read(imageurl).then(function (image) {
        image.quality(10)
             .getBuffer(Jimp.MIME_JPEG, (error, buffer) => {
             message.channel.send("", {
                 files: [{
                     attachment: buffer,
                     name: "pixel.jpeg"
                 }]
             });
         });
     });
  }
