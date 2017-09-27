const Discord = require('discord.js');
const settings = require('../settings.json');
module.exports = message => {
  if (message.content.toLowerCase().includes('client.token')) return;
  if (!message.content.startsWith(settings.prefix)) return;
  if (message.author.bot) return;
  if (message.content.startsWith(settings.token)) return message.delete();

  const client = message.client;
  const args = message.content.split(' ');
  const command = args.shift().slice(settings.prefix.length);


  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, message, args)
  } catch (err) {
    console.log(`Command ${command} failed to load!\n${err.stack}`);
	  const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField(`Command ${command} failed to load!`, "Here's what happened:\n```js\n" + err.stack + "```\n" + `${message.author.username}#${message.author.discriminator} sent the command btw.`)
	client.users.get('265071448182358018').send({embed});
	client.users.get('245101046924312578').send('fuck off yetenszi.');
  }
};
