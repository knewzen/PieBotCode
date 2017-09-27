exports.run = function(client, message) {
let large = (() => {
var x = 0;
for (guild of client.guilds.array()) {
    if (guild.large)
        x++;
}
return x;
})()
let small = (() => {
var x = 0;
for (guild of client.guilds.array()) {
    if (!guild.large)
        x++;
}
return x;
})()
    message.channel.sendMessage(" ", {embed: {
            color: 0xFFB200,
            author: {
                 name: "Bot Info and Stats",
                icon_url: "https://cdn.discordapp.com/avatars/288221668290068480/37d470e3ef6bd80279e47e23797558f5.jpg?size=128"
            },
            description: "**Pie**Bot: A bot which can do more than just say hi!",
            fields: [
                {
                  name: "Description About **Pie**Bot",
                  value: "To start using me, do **p.helpme**. \n**Pie**Bot is a bot made for those who likes memes, dog pics and pies. \n[Click here](http://www.piebot.weebly.com) for the website & [click here](https://discordapp.com/oauth2/authorize?client_id=288221668290068480&scope=bot&permissions=2146827519) to invite **Pie**Bot."
                },
                {
                    name: "General Info",
                    value: "**Prefix: **p.\n**Version: 6.0.0 **\n**Pie**Bot's Oven: [discord.gg/PXAuQyG](https://discord.gg/PXAuQyG)"
                },
                {
                    name: "Some stats for you nerds",
                    value:"**Shard: **" + [Math.floor(client.shard.id + 1)] + "\n**Uptime: **" + [Math.floor((client.uptime / 1000) / 60)] + " minutes" + "\n" + `**Total Servers on shard ${[Math.floor(client.shard.id + 1)]}/4: **` + client.guilds.size + "\n" + "**Ping: **" + Math.round(message.client.ping) + "ms" + "\n" + "**Total Users: **" + client.users.size + " users" +
                    "\n" + "**Total Channels: **" + client.channels.size + " channels" + "\n" + "**Memory: **" + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + " mb" + "\n" + `**Large Servers** *(+250 members)*: ${large} servers\n**Small Servers** *(Less than 250 members)*: ${small} servers\n**Large to Small:** ${large}/${small} servers`
                }
            ]
        }});
}
