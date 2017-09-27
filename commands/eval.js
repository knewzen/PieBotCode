exports.run = function(client, message, args) {
      if(message.author.bot) return;
      if (message.content == 'p.eval 9 + 10') return;
      if (message.content == 'p.eval mlg') return;
      if (message.content == 'p.eval pie + cake') return;
  if (message.author.id !== "265071448182358018")
  return message.channel.send({embed: {
  color: 0xFF0000,
  description: "Sorry :frowning:\nThis can only be done by **Pie#9196.**"
  }}) + console.log('Owner only command attemped by: ' + message.author.username + '(' + message.author.id + ')' + ' on ' + message.guild.name + '(' + message.guild.id + ')');
  var evalcode = message.content.split(" ").splice(1).join(" ");
      try {
        var evaled = eval(evalcode);
        if (typeof evaled !== "string")
  evaled = require("util").inspect(evaled, {depth: 0});
          message.channel.send({embed: {
  color: 0x00FF00,
  description: "Output:\n```js\n" + clean(evaled) + "```"
  }});
      }
      catch (err) {
        message.channel.send({embed: {
  color: 0xFF0000,
  description: "Error: " + clean(err)
  }});
      }

      function clean(text) {
        if (typeof(text) === "string") {
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        }
        else {
          return text;
        }
      }
};
