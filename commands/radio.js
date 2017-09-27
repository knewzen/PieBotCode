const Discord = require('discord.js');
const client = new Discord.Client();
const ffmpeg = require('ffmpeg');
exports.run = function(client, message, args) {
  if (message.content === 'p.radio mix') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://icecast.arn.com.au/1023.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Mix 102.3!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Mix 102.3...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio nova919') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://117.53.162.168/nova919', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Nova 91.9**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Nova 91.9...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	    if (message.content === 'p.radio fall1') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://46.101.243.245:8000/falloutfm1.ogg', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Fallout Main Station!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Fallout Main Station...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio fall2') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://46.101.243.245:8000/falloutfm7.ogg', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Fallout Classical Radio!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Fallout Classical Radio...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio fall3') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://46.101.243.245:8000/falloutfm6.ogg', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Diamond City Radio!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Diamond City Radio...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio fall4') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://46.101.243.245:8000/falloutfm8.ogg', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**MWTCF!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming MWTCF...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio fall5') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://46.101.243.245:8000/falloutfm2.ogg', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Galaxy News Radio!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Galaxy News Radio...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio fall6') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://46.101.243.245:8000/falloutfm3.ogg', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**NV Radio (New Vegas)!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming NV Radio (New Vegas)...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  if (message.content === 'p.radio kissfresh') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://icy-e-bl-06-cr.sharp-stream.com:8000/kissfresh.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Kiss Fresh!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Kiss Fresh...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  	  if (message.content === 'p.radio clyde1') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://icy-e-bl-07-boh.sharp-stream.com/clyde1.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Clyde1!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Clyde1...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  	  	  if (message.content === 'p.radio coolfm') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://icy-e-bl-09-boh.sharp-stream.com/coolfm.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Cool FM!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Cool FM...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  	  	  	  if (message.content === 'p.radio iloveradio1') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://stream06.iloveradio.de/iloveradio5.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**ILoveRadio 1!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming ILoveRadio 1...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  	  	  	  	  if (message.content === 'p.radio iloveradio2') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://stream06.iloveradio.de/iloveradio2.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**ILoveRadio 2!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming ILoveRadio 2...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  	  	  	  	  	  if (message.content === 'p.radio pophits') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://rfcmedia.streamguys1.com/newpophits.aac', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Pop Hits!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Pop Hits...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio kissfm') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://live-kiss.sharp-stream.com/kissnational.mp3?direct=true&amsparams=playerid%3ABMUK_html5%3Bskey%3A1505123221%3B&awparams=loggedin%3Afalse%3B', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Kiss FM!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Kiss FM...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  if (message.content === 'p.radio power181') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://listen.181fm.com/181-power_128k.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Power 181!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Power 181...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  if (message.content === 'p.radio powerhitradio') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://power-stream.data.lt:8000/PHR.mp3', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Power Hit Radio!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Power Hit Radio...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
	  	  	  if (message.content === 'p.radio prambors') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          const dispatcher = connection.playStream('http://masima.rastream.com/masima-pramborsjakarta?awparams=companionads%3Afalse%3Btags%3Aradioactive%3Bstationid%3Amasima-pramborsjakarta&playerid=Prambors_web&authtoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvaWQiOiJsYXlsaW8iLCJpYXQiOjE1MDUzMDAzMTMsImV4cCI6MTUwNTM4NjcxM30.XG2x8lcDAHTERSrPUtppMN5K3T7vDc8J6nBKq-n89WU&lan=%5B%22en%22%5D&setLanguage=true', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Prambors FM!**")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Power Hit Radio...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
  if (message.content === 'p.radio mofm') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          const dispatcher = connection.playStream('https://streaming.radionomy.com/Mo-FMToday?cntUid=8d8df583-258a-4ca9-8630-0434d910287a&lang=en-GB%2cen-US%3bq%3d0.8%2cen%3bq%3d0.6&ad=radiono5&appName=website', {passes: 4});
          const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .addField(':radio: | Now streaming...', "**Mo-FM Today!**\nCurrently playing the hottest hits from the Billboard Hot 100!\n[Click here to learn more!](https://www.radionomy.com/en/radio/mo-fmtoday)")
          message.channel.sendEmbed(embed)
        })
        .catch(console.log);
    } else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField(':radio: | Before streaming Mo-FM Today...', "Join a voice channel!")
      message.channel.sendEmbed(embed)
    }
  } else {
  if (message.content === 'p.radio leave') {
    if (message.member.voiceChannel) {
message.member.voiceChannel.leave()
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField(':radio:', "Now leaving the voice channel!")
message.channel.sendEmbed(embed)
} else {
const embed = new Discord.RichEmbed()
.setColor(0xFFB200)
.addField(':radio: | Before making me leave...', "join back into the voice channel!")
message.channel.sendEmbed(embed)
}
} else {
  const embed = new Discord.RichEmbed()
  .setColor(0xFFB200)
  .setAuthor(`Radio`, `http://www.iconsfind.com/wp-content/uploads/2016/04/20160406_57047879ab121.png`)
  .setTitle('Listen to online radio!')
  .setDescription('To use, do **p.radio mofm** or something like dat.\nto make me leave the Voice Channel, do **p.radio leave**!')
  .addField('Stations Available:', '**mofm**, **prambors**, **mix**, **powerhitradio**, **pophits**, **nova919**, **iloveradio1**, **iloveradio2**, **clyde1**, **coolfm**, **kissfresh**, **kissfm**, **fall1**, **fall2**, **fall3**, **fall4**, **fall5**, **fall6**')
  message.channel.sendEmbed(embed);
  }
}
}
}
}
  }
  }
  }
  }
  }
  }
}
}
  }
  }
  }
}
  }
  }
  }
}