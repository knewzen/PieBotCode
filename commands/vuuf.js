const Discord = require("discord.js");
exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField(`Vuuf, `, `${message.author.username}!`)
  .setImage(`https://cdn.discordapp.com/attachments/315651897526845454/319412613173739520/image.png`)
  .setFooter(`Vuufed by ${message.author.username}.`)
message.channel.send({embed})
}
