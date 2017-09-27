exports.run = function(client, message) {
	message.channel.send('', {embed: {
    color: 0xFFB200,
    author: {
      name: message.guild.name,
      icon_url: message.guild.iconURL
    },
    fields: [{
        name: `Here's some info about ${message.guild.name}`,
        value: `Total Members: **${message.guild.memberCount}**\nChannels: **${message.guild.channels.size}**\nOwner: **${message.guild.owner.user.username}** *(${message.guild.owner.id})*\nEmojis: **${message.guild.emojis.size}**\nRoles: **${message.guild.roles.size}**\nServer Creation Date:**\n${message.guild.createdAt}**`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `Requested by ${message.author.username}`
    }
        }});
}
