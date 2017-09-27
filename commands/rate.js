const Discord = require("discord.js");
exports.run = function(client, message, args) {
var reason = message.content.split(' ')
reason.shift()
var reason = reason.join(' ');
var reason = reason = reason.replace(".", "");
if (!reason) {
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField(':mouse2: Rate', "I can't rate with nothingness. Please try again :wink:")
.setFooter(`Rated by ${message.author.username}`)
return message.channel.sendEmbed(embed);
}
var response = [`I would rate **${reason}** 1/10.`, `I would rate **${reason}** 2/10.`, `I would rate **${reason}** 3/10.`, `I would rate **${reason}** 4/10.`, `I would rate **${reason}** 5/10.`, `I would rate **${reason}** 6/10.`, `I would rate **${reason}** 7/10.`, `I would rate **${reason}** 8/10.`, `I would rate **${reason}** 9/10.`, `I would rate **${reason}** 10/10.`];
  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField(':mouse2: Rate', response[~~(Math.random() * response.length)])
  .setFooter(`Rated by ${message.author.username}.`)
  message.channel.send({embed})
}
