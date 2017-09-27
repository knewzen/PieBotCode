exports.run = function(client, message) {
message.react('✅');
  message.channel.send({embed: {
  color: 0xFFB200,
  description: `**${message.author.username}, check your DM's!**`
}});
	message.author.send('', {embed: {
    color: 0xFFB200,
    author: {
      name: "Help",
      icon_url: "https://cdn.discordapp.com/attachments/314674872825544704/323363410165104640/helpme.png"
    },
    fields: [{
		  name: "#Update6 in the works",
		  value: "New commands will be coming soon <:yellow_fruit:337558557199433741>"
	  },
      {
        name: 'New Commands',
        value: '**p.tts** | *example: p.tts I like to breathe in air.*\n**p.grapefruit** | *pics of grapefruit*\n**More commands coming very shortly like p.easteregg and dat**'
      },
      {
        name: 'Picture commands',
        value: '**p.catto** | *pics of cats*\n**p.chicken** | *pics of chicken*\n**p.doggo** | *shows you a pic of a doggo*\n**p.vuuf** | *Vuuf*\n**p.vuuuf** | *VUUUF.*\n**p.pie** | *comes up with a pic of a pie cause why not*'
      },
      {
        name: 'Audio commands',
        value: '**p.radio** | *plays radio stations I think*\n**p.play** | *plays songs (either by url or by name, in development)*'
      },
      {
        name: 'Reaction Commands',
        value: '**p.yellow** | <:yellow_fruit:337558557199433741>\n**p.angery** | <:angery:339319884146278401>\n**p.trump** | <:trumpie:307507694917517312>'
      },
      {
        name: 'Moderation Commands',
        value: `\n**p.warn** | *example: p.warn @grandayy posting too dank memeys*\n**p.ban** | *example: p.ban @jeff my name is*\n**p.kick** | *example: p.kick @keemstar reporting the news*`
      },
      {
        name: `Fun Commands`,
        value: '**p.roast** | *you can roast yourself or another person*\n**p.1v1 <@user> OR just p.1v1** | *you can 1v1 pie or a person.*\n**p.net** | *throws a net at someone*\n**p.im** | *hi keemstar, im pie!*\n**p.eat** | *eat me or another member*\n**p.catchmeoutside** | *the first command which was made*\n**p.summon pie** | *I dunno why*\n**p.money** | *rich af*\n**p.idk** | *idk*\n**p.pingpie** | *why did i add this again?*\n**p.8ball** | *it could be possible Pie#9196*\n**p.rate** | *I would rate Jeff 4/20*'
      },
      {
        name: 'Story time',
        value: "**p.lemon** | *a story* \n**p.luckayy** | *another story*"
      },
      {
        name: 'Some stuff',
        value: '**p.nasty** | *idk.*\n**p.helpme** *the command you are using rn*\n**p.report** | *reports nasty bugs and suggestions*\n**p.avatar** | *shows your avatar or others*\n**p.info** | *some basic stuff about* ***Pie****Bot*\n**p.ping** | *pings dat and this*'
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: "https://yt3.ggpht.com/-VpU5gxnVCN8/AAAAAAAAAAI/AAAAAAAAAAA/K9fKj4NzB54/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
      text: "Made by: Pie#9196. Last Updated: 26/08/17"
    }
        }});
}
