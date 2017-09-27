const Discord = require('discord.js');
const prefix = "pb."
exports.run = function(client, message, args) {
  var define = message.content.substring(prefix.length + 5);
      var urban = require('urban'),
          define = urban(define);
      define.first(function(json) {
try {
if (!json.example) {
const embed4 = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField(`Definition of ${json.word}`, `${json.definition}`)
.setFooter(`Made by: ${json.author}`)
message.channel.sendEmbed(embed4);
} else {
        const embed5 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(`Definition of ${json.word}`, `${json.definition}`)
        .addField("Example", `${json.example}`)
        .setFooter(`Made by: ${json.author}`)
        message.channel.sendEmbed(embed5);
      }
}
catch (err) {
var reason = message.content.split(' ')
reason.shift()
var reason = reason.join(' ');
const embed6 = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField(`:(`, `I couldn't find the definition of **${reason}.**`)
message.channel.sendEmbed(embed6);
}
      })
    }
