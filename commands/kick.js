const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = function(client, message, args) {
if(message.author.bot) return;
var user = message.mentions.users.first();
var member = message.guild.member(user);
var reason = message.content.split(' ').slice(2).join(' ');
  let role = message.member.hasPermission('KICK_MEMBERS');
    if (!message.member.hasPermission('KICK_MEMBERS')) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField("Kick", "You don't have admin or mod powers. Please try again.")
    .setFooter(`Please ask a mod or someone who has powers to do this.`)
    return message.channel.sendEmbed(embed)
    .then(x => DeleteQueue.add(x, 10000))
  }
    if (!user) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField("Kick", "Who are you going to kick?")
    .setFooter(`Please use this command wisely.`)
    return message.channel.sendEmbed(embed)
    .then(x => DeleteQueue.add(x, 10000))
  }
    if (!reason) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField("Kick", "Please provide a reason.")
    .setFooter(`Make sure the reason is descriptive and useful for later usage.`)
    return message.channel.sendEmbed(embed)
    .then(x => DeleteQueue.add(x, 10000))
  }
      member.kick().then(() => {
        const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("Kicked", `Hi <@${user.id}>!\nYou have been kicked for **${reason}** in ${message.guild.name}.`)
        .setFooter(`You have been kicked by ${message.author.username}.`)
        user.sendEmbed(embed1)
        const embed2 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("Kicked", `Hello <@${message.author.id}>!\nYou have kicked <@${user.id}> for **${reason}** in ${message.guild.name}.`)
        .setFooter(`You have kicked ${user.username}.`)
        message.author.sendEmbed(embed2)
        const embed3 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("Kicked", `<@${user.id}> has been kicked for **${reason}**.\nIf you're a mod or owner, please check the logs channel.`)
        .setFooter(`Action done by ${message.author.username}.`)
        message.channel.sendEmbed(embed3)
           const embed = new Discord.RichEmbed()
           .setColor(0xFF0000)
           .setTimestamp()
           .addField('Kick', `User: <@${user.id}>\nKicked by: <@${message.author.id}>\nReason: ${reason}`)
           .setThumbnail(user.avatarURL)
           .setFooter(`${message.guild.name} logs | by PieBot.`)
           return message.guild.channels.find("name", "logs", "log").sendEmbed(embed);
});
}
