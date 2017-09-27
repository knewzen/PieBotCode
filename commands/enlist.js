exports.run = function(client, message) {
const role = message.guild.roles.find(x => x.name === "enlisted");
if (!role) return message.channel.send("Whoops! This server doesn't have the `enlisted` role! Try again later!");
if(message.member.roles.exists("name","enlisted")) {
  message.delete();
return message.channel.send(`Sorry <@${message.author.id}>. You can't enlist yourself twice.`);
} else {
message.delete();
message.member.addRole(role);
message.channel.send(`Congrats <@${message.author.id}>! You now have access to all channels!`);
message.guild.defaultChannel.send(`Hello <@${message.author.id}>! Welcome to the main chat! Have fun ;)`);
}
}
