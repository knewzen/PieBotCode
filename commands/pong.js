const Discord = require('discord.js');
exports.run = function(client, message) {
message.reply('pong? What... um. Ping?');
var delayMillis = 10000;
setTimeout(function() {
  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField(':ping_pong:', 'I ponged back at the speed of ' + Math.round(message.client.ping) + ' ms!')
  .setFooter(`Pinged by ${message.author.username}`)
  message.channel.sendEmbed(embed);
  message.channel.send('Welp :3')
  }, delayMillis);
}
