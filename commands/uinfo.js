const Discord = require("discord.js");
exports.run = function(client, message) {
var user = message.mentions.users.first();
if (!user) {
if (message.author.bot) {
if (message.author.presence.game === null) {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(message.author.avatarURL)
      .addField(`Here's some info about ${message.author.username}`, `Status: **${message.author.presence.status}**\nDiscriminator: **${message.author.discriminator}**\nID: **${message.author.id}**\nGame: **None**\nBot: **Yes**\nUser Created at **${message.author.createdAt}**\nLast message sent: **${message.author.lastMessage}** *(${message.author.lastMessageID})*`)
      return message.channel.send({embed});
} else {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(message.author.avatarURL)
      .addField(`Here's some info about ${message.author.username}`, `Status: **${message.author.presence.status}**\nDiscriminator: **${message.author.discriminator}**\nID: **${message.author.id}**\nGame: **${message.author.presence.game.name}**\nBot: **Yes**\nUser Created at **${message.author.createdAt}**\nLast message sent: **${message.author.lastMessage}** *(${message.author.lastMessageID})*`)
      return message.channel.send({embed});
}
} else {
	if (message.author.presence.game === null) {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(message.author.avatarURL)
      .addField(`Here's some info about ${message.author.username}`, `Status: **${message.author.presence.status}**\nDiscriminator: **${message.author.discriminator}**\nID: **${message.author.id}**\nGame: **None**\nBot: **No**\nUser Created at **${message.author.createdAt}**\nLast message sent: **${message.author.lastMessage}** *(${message.author.lastMessageID})*`)
      return message.channel.send({embed});
} else {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(message.author.avatarURL)
      .addField(`Here's some info about ${message.author.username}`, `Status: **${message.author.presence.status}**\nDiscriminator: **${message.author.discriminator}**\nID: **${message.author.id}**\nGame: **${message.author.presence.game.name}**\nBot: **No**\nUser Created at **${message.author.createdAt}**\nLast message sent: **${message.author.lastMessage}** *(${message.author.lastMessageID})*`)
      return message.channel.send({embed});
}
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(message.author.avatarURL)
      .addField(`Here's some info about ${message.author.username}`, `Status: **${message.author.presence.status}**\nDiscriminator: **${message.author.discriminator}**\nID: **${message.author.id}**\nGame: **${message.author.presence.game.name}**\nBot: **No**\nUser Created at **${message.author.createdAt}**\nLast message sent: **${message.author.lastMessage}** *(${message.author.lastMessageID})*`)
      return message.channel.send({embed});
}
} else {
if (user.bot) {
if (user.presence.game === null) {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(user.avatarURL)
      .addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **None**\nBot: **Yes**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
      return message.channel.send({embed});
} else {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(user.avatarURL)
      .addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **${user.presence.game.name}**\nBot: **Yes**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
      return message.channel.send({embed});
}
} else {
if (user.presence.game === null) {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(user.avatarURL)
      .addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **None**\nBot: **No**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
      return message.channel.send({embed});
} else {
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(user.avatarURL)
      .addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **${user.presence.game.name}**\nBot: **No**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
      return message.channel.send({embed});
}
const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
	  .setThumbnail(user.avatarURL)
      .addField(`Here's some info about ${user.username}`, `Status: **${user.presence.status}**\nDiscriminator: **${user.discriminator}**\nID: **${user.id}**\nGame: **${user.presence.game.name}**\nBot: **No**\nUser Created at **${user.createdAt}**\nLast message sent: **${user.lastMessage}** *(${user.lastMessageID})*`)
      return message.channel.send({embed});
}
}
}
