const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(message.author.bot) return;
if (!message.guild || !message.member) return;
var reason = message.content.split(' ')
reason.shift()
var reason = reason.join(' ');
var reason = reason = reason.replace("?", "");
if (!reason) {
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField(':8ball: 8ball', "I can't tell with nothingness. Please try again :wink:.")
.setFooter(`8balled by ${message.author.username}`)
return message.channel.sendEmbed(embed);
}
var response = [`**${reason}?** **No** **${message.author.username}.** Just no.`, `**${reason}?** **Yes**. A big **Y E S** **${message.author.username}!**`, `**${reason}?** Maybe. Who knows amirite?\n*besides you* **${message.author.username}** :wink:.`, `**${reason}?** Possibly but for now, no **${message.author.username}.**`, `**${reason}?** Well um it could be possible **${message.author.username}.**`];
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField(':8ball: 8ball', response[~~(Math.random() * response.length)])
.setFooter(`8balled by ${message.author.username}`)
return message.channel.sendEmbed(embed);
}
