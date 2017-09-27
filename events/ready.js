  const settings = require('../settings.json');
  const Discord = require('discord.js');
  const client = new Discord.Client();
module.exports = client => {
	client.login(settings.token)
				  client.user.setGame('p.helpme');
          console.log(`I am online on ${client.guilds.size} servers with ${client.users.size} users!`);
		   const embed = new Discord.RichEmbed()
    .setColor(0x00FF00)
  .addField(`Shard ${[Math.floor(client.shard.id + 1)]}/4`, `I am now online on ${client.guilds.size} servers with ${client.users.size} users!`)
  .setTimestamp()
client.users.get('265071448182358018').send({embed});
};
