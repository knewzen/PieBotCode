const Discord = require('discord.js');
exports.run = function(client, message) {
var fish = ['https://cdn.petbarn.com.au/petspot/wp-content/uploads/2015/10/new-fish-to-tank-blog.jpg', 'https://fthmb.tqn.com/OYILOJ_1wa5izq_L1eRMLnRNxZY=/1280x853/filters:fill(auto,1)/about/angelfish-resized-56a81f015f9b58b7d0f0dad1.jpg', 'http://www.pir.sa.gov.au/__data/assets/image/0012/285699/varieties/preview.jpg', 'http://www.freepngimg.com/download/tropical_fish/14-2-fish-png-15.png', 'https://qph.ec.quoracdn.net/main-qimg-99c2edc9b5af5bce7c8b22b6c0165892', 'http://s7d2.scene7.com/is/image/PetSmart/ARTHMB-HowDoISetUpMyAquariumForMultipleFish-20160818?$AR1104$', 'http://www.firstaidforfree.com/wp-content/uploads/2015/02/FISHSHAPED.png', 'https://www.takemefishing.org/tmf/assets/images/fish/bigmouth-buffalo-464x170.png', 'https://i.ytimg.com/vi/ZOxIhBO-_64/maxresdefault.jpg']
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .addField(`SWIM AWAY... `, `${message.author.username} BEFORE IT'S TOO LATE!`)
        .setImage(`${fish[~~(Math.random() * fish.length)]}`)
        return message.channel.send({embed});
      }
