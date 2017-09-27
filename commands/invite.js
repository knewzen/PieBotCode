const Discord = require("discord.js");
exports.run = function(client, message) {
		    const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField('Invite me!', '[Click me!](https://thefallingpie.github.io/discordpiebot/index.html)')
   message.channel.send({embed});
}
