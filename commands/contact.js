const Discord = require('discord.js');
exports.run = function(client, message, args) {
var reason = message.content.split(' ')
reason.shift()
var reason = reason.join(' ');
var reason = reason = reason.replace(".", "");
	let imageurl = args[0] === undefined ? message.attachments.first() : { url: args[0] };
	     if (imageurl === undefined) {
if (!reason) {
	var embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField('Contact Pie#9196', "What are you going to send him again? :thinking:")
return message.channel.send({embed});
} else {
var embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField('Sent!', "Your message has been sent to Pie#9196!")
message.channel.send({embed});
var embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField(`From: ${message.author.username}`, `${reason}`)
client.users.get('265071448182358018').send({embed});
}
} else {
if (!reason) {
		var embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField('Contact Pie#9196', "What are you going to send him again? :thinking:")
return message.channel.send({embed});
} else {
var embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField('Sent!', "Your message has been sent to Pie#9196!")
message.channel.send({embed});
var embed = new Discord.RichEmbed() 
.setColor(0xFFB200)
.addField(`From: ${message.author.username}`, `${reason}` + `${imageurl}`)
client.users.get('265071448182358018').send({embed});
}
}
}