const Discord = require("discord.js");
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setAuthor('Need some help?')
.setDescription('Below is some links to help you')
.addField('Twitter', '[@DiscordPieBot](https://twitter.com/DiscordPieBot)' + '\n \u200b', true)
.addField('Discord Server', '[discord.gg/PXAuQyG](https://discord.gg/PXAuQyG)' + '\n \u200b', true)
.addField('FaceBook', '[@DiscordPieBot](https://www.facebook.com/DiscordPieBot/)', true)
.setThumbnail('https://cdn.discordapp.com/avatars/288221668290068480/46699e6e0401d3fe69b4a80fa959a97d.png')
message.channel.send({embed});
}
