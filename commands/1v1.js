const Discord = require('discord.js');
exports.run = function(client, message, args) {
  var item = message.content.split(' ').slice(2).join(' ');
  var user = message.mentions.users.first();
  if (message.content == `p.1v1 <@${message.author.id}>`) {
  var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
  var health = ["20", "10", "60", "40", "80", "50", "70", "30", "90", "100"]
  var response = [`${msg.author.username} ${action[~~(Math.random() * action.length)]}!\nPie loses ${health[~~(Math.random() * health.length)]} hp.\nPie ${action[~~(Math.random() * action.length)]}. ${msg.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    const embed1 = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField('1v1', response[~~(Math.random() * response.length)])
    .setFooter(`1v1ed by ${msg.author.username}`)
return msg.channel.sendEmbed(embed1);
};
  if (message.content == `p.1v1 <@${message.author.id}> ${item}`) {
    var item = msg.content.split(' ').slice(2).join(' ');
  var actitem = [` to smash Pie's head into the ground`, ` to clean up Pie's mess`]
  var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
  var health = ["20", "10", "60", "40", "80", "50", "70", "30", "90", "100"]
  var response = [`${msg.author.username} uses ${item}${actitem[~~(Math.random() * actitem.length)]}!\nPie loses ${health[~~(Math.random() * health.length)]} hp.\nPie ${action[~~(Math.random() * action.length)]}. ${msg.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    const embed3 = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField('1v1', response[~~(Math.random() * response.length)])
    .setFooter(`1v1ed by ${msg.author.username}`)
    return msg.channel.sendEmbed(embed3);
  }
if (!item) {
if (!user) {
  var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
  var health = ["20", "10", "60", "40", "80", "50", "70", "30", "90", "100"]
  var response = [`${message.author.username} ${action[~~(Math.random() * action.length)]}!\nPie loses ${health[~~(Math.random() * health.length)]} hp.\nPie ${action[~~(Math.random() * action.length)]}. ${message.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    const embed1 = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField('1v1', response[~~(Math.random() * response.length)])
    .setFooter(`1v1ed by ${message.author.username}`)
return message.channel.sendEmbed(embed1);
}
var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
var health = ["20", "10", "60", "40", "80", "50", "70", "30", "90", "100"]
var response = [`${message.author.username} ${action[~~(Math.random() * action.length)]}!\n${user.username} loses ${health[~~(Math.random() * health.length)]} hp.\n${user.username} ${action[~~(Math.random() * action.length)]}. ${message.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
  const embed2 = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField('1v1', response[~~(Math.random() * response.length)])
  .setFooter(`1v1ed by ${message.author.username}`)
return message.channel.sendEmbed(embed2);
}
if (!user) {
  var item = message.content.split(' ').slice(2).join(' ');
  var actitem = [` to smash Pie's head into the ground`, ` to clean up Pie's mess`]
  var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
  var health = ["20", "10", "60", "40", "80", "50", "70", "30", "90", "100"]
  var response = [`${message.author.username} uses ${item}${actitem[~~(Math.random() * actitem.length)]}!\nPie loses ${health[~~(Math.random() * health.length)]} hp.\nPie ${action[~~(Math.random() * action.length)]}. ${message.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    const embed3 = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField('1v1', response[~~(Math.random() * response.length)])
    .setFooter(`1v1ed by ${message.author.username}`)
    return message.channel.sendEmbed(embed3);
}
var actitem = [` to smash ${user.username}'s head into the ground`, ` to clean up ${user.username}'s mess`]
  var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
var health = ["20", "10", "60", "40", "80", "50", "70", "30", "90", "100"]
  const embed4 = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField('1v1', `${message.author.username} uses ${item}${actitem[~~(Math.random() *actitem.length)]}!\n${user.username} loses ${health[~~(Math.random() * health.length)]} hp.\n${user.username} ${action[~~(Math.random() * action.length)]}.\n${message.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`)
  .setFooter(`1v1ed by ${message.author.username}`)
message.channel.sendEmbed(embed4);
}
