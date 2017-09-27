const Discord = require('discord.js');
exports.run = function(client, message) {
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .addField(`I will never give you up, `, `${message.author.username}!`)
        .setImage("https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif")
        return message.channel.sendEmbed(embed);
      }
