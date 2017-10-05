const Discord = require('discord.js');
exports.run = function(client, message) {
var tip = ["This is a tip. Please add one by contacting pie with `p.contact` as since I'm dumb!"]
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .addField(`A tip for you ${message.author.username}`, `${tip[~~(Math.random() * tip.length)]}`)
        return message.channel.send({embed});
      }
