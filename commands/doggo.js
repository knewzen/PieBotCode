const Discord = require('discord.js');
exports.run = function(client, message) {
var dog = ['https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi', 'http://i2.kym-cdn.com/photos/images/newsfeed/000/674/934/422.jpg', 'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/DA746CFE-B4A4-43C0-A02F8BAF7BC6CE20/thul-51a71b71-3799-5e48-8a84-5b08c9efa9cf.jpg?response-content-disposition=inline']
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(`Here's a doggo, `, `${message.author.username}!`)
        .setImage(`${dog[~~(Math.random() * dog.length)]}`)
        .setFooter(`Borked by ${message.author.username}.`)
        return message.channel.sendEmbed(embed);
      }
