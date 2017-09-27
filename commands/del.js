const Discord = require("discord.js");
const Queue = require("../DeleteQueue.js");
const DeleteQueue = new Queue();
exports.run = function(client, message, args) {
var numberofmessages = message.content.split(' ').slice(1).join(' ');
var reason = message.content.split(' ')
reason.shift()
var reason = reason.join(' ');
let role = message.member.hasPermission('KICK_MEMBERS');
if (!message.member.hasPermission('KICK_MEMBERS')) {
  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField("Delete Messages", "You don't have admin or mod powers. Please try again.")
  .setFooter(`Deleted by ${message.author.username}`)
  return message.channel.sendEmbed(embed)
}
if (isNaN(numberofmessages)) {
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField("Delete Messages", `Great try doing ${reason} ${message.author.username}! Maybe put numbers instead :wink:`)
.setFooter(`Deleted by ${message.author.username}`)
return message.channel.sendEmbed(embed)
.then(x => DeleteQueue.add(x, 10000))
}
if (!numberofmessages) {
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField("Delete Messages", "How many are you going to delete?")
.setFooter(`Deleted by ${message.author.username}`)
return message.channel.sendEmbed(embed)
.then(x => DeleteQueue.add(x, 10000))
}
let messagecount = parseInt(numberofmessages) + 1;
message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField("Delete Messages", `Deleted ${numberofmessages} messages!`)
.setFooter(`Deleted by ${message.author.username}`)
message.channel.sendEmbed(embed)
.then(x => DeleteQueue.add(x, 5000))
}
