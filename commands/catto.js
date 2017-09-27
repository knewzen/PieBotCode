const Discord = require("discord.js");
const randomCat = require('random-cat');
exports.run = function(client, message) {
var url = randomCat.get();
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField(`Here's a catto, `, `${message.author.username}!`)
.setImage(`${url}`)
.setFooter(`Meowed by ${message.author.username}.`)
return message.channel.send({embed})
}
