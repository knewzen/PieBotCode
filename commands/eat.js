const Discord = require("discord.js");
exports.run = function(client, message, args) {
    if (message.content== `p.eat <@265071448182358018>`) {
		    const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField('Eat', `Why would I eat my owner Pie#9196? Why?`)
    .setFooter(`Eaten by ${message.author.username}`)
   message.channel.send({embed});
	} else {
        if (message.content== `p.eat <@!265071448182358018>`) {
			    const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField('Eat', `Why would I eat my owner Pie#9196? Why?`)
    .setFooter(`Eaten by ${message.author.username}`)
   message.channel.send({embed});
		} else {
    if (message.content== `p.eat <@288221668290068480>`) {
		  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField('Eat', `<@${message.author.id}> just took a bite from me. Sad :(`)
  .setFooter(`Eaten by ${message.author.username}`)
 message.channel.send({embed});
	} else {
        if (message.content== `p.eat <@!288221668290068480>`) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField('Eat', `${message.author.username} just took a bite from me. Sad :(`)
  .setFooter(`Eaten by ${message.author.username}`)
 message.channel.send({embed});
		} else {
var user = message.mentions.users.first();
var member = message.guild.member(user);
if (!user) {
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField('Eat', `${message.author.username} just took a bite from me. Sad :(`)
.setFooter(`Eaten by ${message.author.username}`)
return message.channel.send({embed});
} else {
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField('Eat', `${message.author.username} just took a bite from ${user.username}. Lucky it wasn't me tho`)
.setFooter(`Eaten by ${message.author.username}.`)
message.channel.send({embed});
}
}
}
		}
	}
}
