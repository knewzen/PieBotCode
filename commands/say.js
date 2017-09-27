exports.run = function(client, message, args) {
if (message.content.includes('nothing')) return message.channel.send(`Nice try ${message.author.username} <:yellow_fruit:325965631818170369>`);
if (message.content.includes('@everyone')) return;
if (message.content.includes('@here')) return;
if(message.author.bot) return;
if (!message.guild || !message.member) return;
var reason = message.content.split(' ')
reason.shift()
var reason = reason.join(' ');
if (!reason) {
return message.channel.send(`I can't say nothing ${message.author.username}! Make me say something. kthx.`);
}
message.delete();
message.channel.send(`${reason}`);
};
