const Fuse = require('fuse.js');
const Discord = require("discord.js");
function findUser(user, message){
  let options = {
    shouldSort: true,
    includeScore: true,
    threshold: 0.4,
    location: 10,
    distance: 100,
    maxPatternLength: 31,
    minMatchCharLength: 1,
    keys: [
      "nickname"
    ]
  };
  const fuse = new Fuse(message.guild.members.map(x => x), options);
  if (fuse.search(user).length !== 0) {
    return fuse.search(user)[0].item.user;
  } else {
    const options2 = options = {
      keys: [
        "username"
      ]
    };
    const fuse2 = new Fuse(message.guild.members.map(x => x.user), options2);
    return fuse2.search(user)[0];
  }
}
exports.run = function(client, message, args) {
  if (args.length === 0) {
  message.channel.send({embed: new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTitle(message.author.username+"\'s Avatar:")
    .setImage(message.author.avatarURL)
    .setURL(message.author.avatarURL)
    .setTimestamp()
    .setFooter(`Avatared by ${message.author.username}`)
  }); // if no args or if requesting own url
  } else if (message.mentions.users.size === 0) {
  try {
    message.channel.send({embed: new Discord.RichEmbed()
      .setColor(0xFFB200)
      .setTitle(findUser(args.join(" "), message).username+"\'s Avatar:")
      .setImage(findUser(args.join(" "), message).avatarURL)
      .setURL(findUser(args.join(" "), message).avatarURL)
      .setTimestamp()
      .setFooter(`Avatared by ${message.author.username}`)
    }); // if no mentions
  }
  catch (err) {
    message.channel.send({embed: new Discord.RichEmbed()
      .setColor(0xFFB200)
      .setAuthor("Error")
      .setTitle(":(\nI could not find the user in guild.")
      .setTimestamp()
    }); // if no users could be found
  }
  } else {
  message.channel.send({embed: new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTitle(message.mentions.users.first().username+"\'s Avatar:")
    .setImage(message.mentions.users.first().avatarURL)
    .setURL(message.mentions.users.first().avatarURL)
    .setTimestamp()
    .setFooter(`Avatared by ${message.author.username}`)
  }); // if has mentions
  }
}
