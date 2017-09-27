var Jimp = require("jimp");
exports.run = function(client, message, args) {
  let imageurl = args[0] === undefined ? message.attachments.first() : { url: args[0] };

     if (imageurl === undefined) {
         message.channel.send("**Please attach an image, or give a url to an image**");
         return;
     }

     imageurl = imageurl.url;

     Jimp.read(imageurl).then(function (image) {
       image.invert()
             .getBuffer(Jimp.MIME_PNG, (error, buffer) => {
             message.channel.send("", {
                 files: [{
                     attachment: buffer,
                     name: "invert.png"
                 }]
             });
         });
     });
  }
