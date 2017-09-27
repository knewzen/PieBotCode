const Discord = require('discord.js');
exports.run = function(client, message, args) {
if (message.author.bot) return;
var user = message.mentions.users.first();
var member = message.guild.member(user);
let reason = message.content.trim().split(' ').slice(2).join(' ');
if (!user) {
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `<@${message.author.id}> check dms!`)
        .setFooter(`Cookied by ${message.author.username}`);
    message.channel.sendEmbed(embed1)
        .then(x => DeleteQueue.add(x, 5000));
    const embed2 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `You have received a :cookie: from <@288221668290068480>!`)
        .setFooter(`Sent from Pie!`);
    return message.author.sendEmbed(embed2);
} else if (!reason) {
    const embed3 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `<@${user.id}> check dms!`)
        .setFooter(`Cookied by ${message.author.username}`);
    message.channel.sendEmbed(embed3)
        .then(x => DeleteQueue.add(x, 5000));
    const embed4 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `You have received a :cookie: from <@${message.author.id}>!`)
        .setFooter(`Sent from ${message.author.username}`);
    user.sendEmbed(embed4)
        .then(() => {
            const embed5 = new Discord.RichEmbed()
                .setColor(0xFFB200)
                .setTimestamp()
                .addField(':cookie:', `You have sent a :cookie: to <@${user.id}>!`)
                .setFooter(`Sent to ${user.username}`);
            message.author.sendEmbed(embed5);
        });
} else {
    const embed3 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `<@${user.id}> check dms!`)
        .setFooter(`Cookied by ${message.author.username}`);
    message.channel.sendEmbed(embed3)
        .then(x => DeleteQueue.add(x, 5000));
    const embed4 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `You have received a :cookie: from <@${message.author.id}> with a message saying ${reason}!`)
        .setFooter(`Sent from ${message.author.username}`);
    user.sendEmbed(embed4)
        .then(() => {
            const embed5 = new Discord.RichEmbed()
                .setColor(0xFFB200)
                .setTimestamp()
                .addField(':cookie:', `You have sent a :cookie: to <@${user.id}>!`)
                .setFooter(`Sent to ${user.username}`);
            message.author.sendEmbed(embed5);
        });
}
};
