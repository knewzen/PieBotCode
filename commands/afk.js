const Discord = require('discord.js');
const fs = require("fs");
const afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
exports.run = function(client, message, args) {
  message.delete()
  message.member.setNickname("[AFK] " + message.member.displayName);
  var args = message.content.split(' ').slice(1);
  if (args.length === 0) {
    afk[message.author.id] = {"reason": true}; // if no reason
    const embed3 = new Discord.RichEmbed()
    .setColor(0x1FFF00)
    .setTimestamp()
    .addField('AFK', "You are now AFK!")
    message.channel.sendEmbed(embed3)
    .then(x => DeleteQueue.add(x, 10000));
  } else {
    afk[message.author.id] = {"reason": args.join(" ")}; // with reason
    const embed4 = new Discord.RichEmbed()
    .setColor(0x1FFF00)
    .setTimestamp()
    .addField('AFK', "I set your AFK reason to: " + "**" + args.join(" ") + "**")
    message.channel.sendEmbed(embed4)
    .then(x => DeleteQueue.add(x, 10000));
  }
  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
}
