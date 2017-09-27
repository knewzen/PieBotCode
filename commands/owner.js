exports.run = function(client, message) {
if (message.author.id !== '265071448182358018') {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
.addField('Owner', 'You are not Pie#9196 ;-;')
return message.channel.send({embed});
} else {
const embed = new Discord.RichEmbed()
.setColor(0x00FF0F)
.addField('Owner', `Hello Pie#9196!`)
message.channel.send({embed});
}
}
