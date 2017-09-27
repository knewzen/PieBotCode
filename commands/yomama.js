exports.run = function(client, message, args) {
if(message.author.bot) return;
if (!message.guild || !message.member) return;
var response = ["is so dumb that she couldn't tell the difference between a pie and a cake.", "is so fat that she thinks that pi is food instead of pie.", "is so stupid that she thinks that a smart phone is a brick phone."]
  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setTimestamp()
  .addField(':loudspeaker: Yo mama', response[~~(Math.random() * response.length)])
  .setFooter(`${message.author.username} told yo mama dat and um yea.`)
  return message.channel.sendEmbed(embed);
}
