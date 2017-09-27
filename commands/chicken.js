const Discord = require('discord.js');
exports.run = function(client, message) {
var chicken = ['http://nowiknow.com/wp-content/uploads/chicken-011.jpg', 'https://static-blog.mypetchicken.com/wp-content/uploads/2015/10/dreamstimemaximum_19282232.jpg', 'http://www.southdacola.com/blog/wp-content/uploads/2014/06/chicken_sombrero.gif', 'https://blog.imgur.com/wp-content/uploads/2016/12/chicken.jpg', 'https://static3.mypetchicken.com/images/product_images/large/MPC-product-diaper-on-chicken.jpg', 'https://www.mypetchicken.com/images/product_images/Popup/MyPetChicken-Harness.jpg', 'http://dreamatico.com/data_images/chicken/chicken-2.jpg']
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.setFooter(`Chickened by ${message.author.username}.`)
.addField('Chicken', `Here's your chicken ${message.author.username}!`)
.setImage(`${chicken[~~(Math.random() * chicken.length)]}`)
message.channel.sendEmbed(embed);
}
