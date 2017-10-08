const Discord = require("discord.js");
exports.run = function (client, msg) {
    msg.reply("Testing ping...").then(m => {
        let latency = Math.floor((m.createdTimestamp - msg.createdTimestamp) / 6);
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':ping_pong:', 'I ponged back at the speed of ' +latency+ ' ms!')
        .setFooter(`Pinged by ${message.author.username}`)
        m.edit({embed});
    });
};