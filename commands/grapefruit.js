const Discord = require('discord.js');
exports.run = function(client, message) {
var gf = ['http://pad3.whstatic.com/images/thumb/d/d3/Prepare-Grapefruit-for-Serving-Step-19.jpg/aid299676-v4-728px-Prepare-Grapefruit-for-Serving-Step-19.jpg', 'http://agamerica.com/wp-content/uploads/2014/11/agamerica-ag-lending-grapefruit.jpg', 'http://envisionoptical.com.au/wp-content/uploads/2014/12/envision-optical-gold-coast-grapefruit-red.jpg', 'https://www.organicfacts.net/wp-content/uploads/2013/05/Grapefruit11.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Grapefruit-Whole-%26-Split.jpg/1200px-Grapefruit-Whole-%26-Split.jpg', 'https://www.organicfacts.net/wp-content/uploads/2013/05/Grapefruit21.jpg', 'https://simpleagain.com/uploads/content/bigstock-Fresh-Ripe-Grapefruit-50117252.jpg', 'http://www.buyfruit.com.au/images/P/iStock_000005630296Small_%28grapefruit_ruby%29__17934.jpg', 'http://www.rebootwithjoe.com/wp-content/uploads/2016/06/Grapefruit.jpg', 'http://www.increasedpresence.com/wp-content/uploads/2016/05/grapefruit-1.jpg', 'https://www.organicparadiso.com.au/wp-content/uploads/2016/01/grapefruit.jpg', 'http://www.slate.com/content/dam/slate/articles/life/holidays/2012/12/121207_HOL_Grapefruit.jpg.CROP.promo-large.jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg', 'https://www.furtherfarms.com/wp-content/uploads/2015/07/grapefruit.jpg', 'https://www.bodybuilding.com/images/2016/september/the-top-6-fat-burning-super-foods-3.jpg', 'http://naturalsociety.com/wp-content/uploads/grapefruit.jpg', 'http://www.myth-trade.com/wp-content/uploads/2016/01/benefits-of-grapefruit-essential-oil-shakti-womyn-nyr-organic-essential-oils.jpg', 'http://www.sp26fruits.com/wp-content/uploads/2015/01/Grapefruit1.jpg']
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(`Here's a grapefruit,`, `${message.author.username}!`)
        .setImage(`${gf[~~(Math.random() * gf.length)]}`)
        .setFooter(`Graped by ${message.author.username}.`)
        return message.channel.sendEmbed(embed);
      }
