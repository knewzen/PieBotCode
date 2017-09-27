exports.run = function(client, message, args) {
let reason = msg.content.split(' ').slice(1).join(' ');
if (!reason) {
return message.channel.sendMessage(`Hi ${message.author.username}, I'm Pie!`);
} else {
message.channel.sendMessage(`Hi ${reason}, I'm Pie!`)
}
}