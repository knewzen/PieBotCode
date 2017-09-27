const Discord = require('discord.js');
exports.run = function(client, message, args) {
var user = message.mentions.users.first();
 var reason = message.content.split(' ').slice(2).join(' ');
if (!user) {
const embed2 = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField("DM A Person", `Who are you going to DM ${message.author.tag}?`)
.setFooter(`lol why did i add dis again?`)
return message.channel.sendEmbed(embed2);
}
 if (!reason) {
   const embed1 = new Discord.RichEmbed()
   .setColor(0xFFB200)
   .addField("DM A Person", `What are you going to say to ${user.tag}?`)
   return message.channel.sendEmbed(embed1);
}
 const embed3 = new Discord.RichEmbed()
 .setColor(0xFFB200)
 .addField("DM A Person", `Successfully sent a DM to ${user.tag}!`)
 .setFooter(`lol.`)
 message.channel.sendEmbed(embed3);
 const embed4 = new Discord.RichEmbed()
 .setColor(0xFFB200)
 .setTimestamp()
 .addField("You have received mail! :mailbox_with_mail:", `**${reason}**`)
 .setFooter(`Sent by ${message.author.tag}.`)
user.sendEmbed(embed4);
}
