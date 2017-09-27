const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(`VUUUF, `, `${message.author.username}!`)
        .setImage(`https://cdn.discordapp.com/attachments/315651897526845454/319414048796049411/image.png`)
        .setFooter(`VUUUFed by ${message.author.username}.`)
        return message.channel.sendEmbed(embed);
      }
