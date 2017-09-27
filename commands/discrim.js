exports.run = function(client, message, args) {
  var reason = message.content.split(' ')
  reason.shift()
  var reason = reason.join(' ');
  if (!reason) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
  .addField('Discrim', 'What discriminator would you like to search?')
  return  message.channel.send({embed});
} else {
  var discrim = reason;
  numberOfDiscrims = 0;
  message.guild.fetchMembers().then(function(newguild) { newguild.members.forEach(function(member) { if(member.user.discriminator.endsWith(discrim)) { numberOfDiscrims++; } }}));
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
.addField(`#${discrim}`, `The amount of people on this server with the discriminator **${discrim}** is: **${numberOfDiscrims}`);
message.channel.send({embed});
}
}
