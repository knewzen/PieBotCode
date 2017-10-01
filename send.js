const Discord = require('discord.js');
exports.run = function(client, message, args) {
var user = message.mentions.users.first();
 var reason = message.content.split(' ').slice(2).join(' ');
 if (message.author.id !== '265071448182358018') return;
if (!user) {
const embed2 = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField("Send someone a reply", `You must define the user with a id or mention.`)
return message.channel.sendEmbed(embed2);
}
 if (!reason) {
   const embed1 = new Discord.RichEmbed()
   .setColor(0xFFB200)
   .addField("Send someone a reply", `You must define the message.`)
   return message.channel.sendEmbed(embed1);
}
 const embed3 = new Discord.RichEmbed()
 .setColor(0xFFB200)
 .addField("Send someone a reply", `Successfully sent a reply to ${user.tag} saying "${reason}"!`)
 message.channel.sendEmbed(embed3);
 const embed4 = new Discord.RichEmbed()
 .setColor(0xFFB200)
 .addField("You have received a message from Pie#9196! :mailbox:", `${reason}`)
user.sendEmbed(embed4);
}
