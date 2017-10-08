const Discord = require('discord.js');
const client = new Discord.Client({
    autoreconnect: true
});

const settings = require('./settings.json');
const prefix = 'p.'
const fs = require('fs');
const web = exports.web = require('./web/webserver');
var shards = new Discord.ShardClientUtil(client);

require('./util/eventLoader')(client);

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


var reload = (message, cmd) => {
    delete require.cache[require.resolve('./commands/' + cmd)];
    try {
        let cmdFile = require('./commands/' + cmd);
    } catch (err) {
        message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
            response => response.delete(1000).catch(error => console.log(error.stack))
        ).catch(error => console.log(error.stack));
    }
    message.channel.sendMessage(`${cmd} reload was a success!`).then(
        response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
};
exports.reload = reload;

var regToken = /[\w\d]{24}.[\w\d]{6}.[\w\d-_]{27}/g;

client.login(settings.token);

if (shards.id < 1) {
    try {
        var config = settings
        web(config, client);
    } catch (err) {
        console.error(`An error occurred during the web interface module initialisation, Error: ${err.stack}`)
    }
} else {

}
