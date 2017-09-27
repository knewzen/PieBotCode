const Discord = require('discord.js');
exports.run = function(client, message) {
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(`I like trains, `, `${message.author.username}!`)
        .setImage("https://i.imgur.com/7zkiG.gif")
        return message.channel.sendEmbed(embed);
      }
