const Discord = require('discord.js');
 const client = new Discord.Client();
const Manager = new Discord.ShardingManager('app.js');
Manager.spawn(4);
Manager.on('launch', shard => console.log(`Shard ${shard.id} is alive!`));

client.on('guildMemberAdd', member => {
  if (member.guild.id =='362186163076988928') {
    const embed = new Discord.RichEmbed()
    .setTitle('Welcome to GamerLounge!')
    .setDescription(`:wave: Welcome ${member.user.username}!\nCheck out <#362186679483760640> before chatting!\nThanks!`)
    .setColor(0xFFB200)
client.channels.find('id', '362186163076988930').send({embed});
} else {
if (member.guild.id =='319312258461335553') {
  const embed = new Discord.RichEmbed()
  .setTitle("Welcome to PieBot's Oven!")
  .setDescription(`:wave: Hello ${member.user.username}!\nI've seen that you have joined the server!\nRead <#350871537424924672> and then do **p.enlist** here!\nThanks!`)
  .setColor(0xFFB200)
client.channels.find('id', '346208316923445249').send({embed});
} else {
    return;
}
}
});
