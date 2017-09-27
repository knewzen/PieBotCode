const Discord = require('discord.js');
const client = new Discord.Client();

const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');

var PREFIX = '='

const queues = require('../modules/ttsqueues.js');

exports.run = function(client, message, args) {

const msg = message.content.trim();
const command = msg.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
const suffix = msg.substring(PREFIX.length + command.length).trim();

var text = message.content.split(" ").splice(1).join(" ");
var searchstring = suffix

let DEFAULT_VOLUME = 50
let CHANNEL = false;

const queue = getQueue(message.guild.id);

function getQueue(server) {
    // Check if global queues are enabled.
    if (global) server = '_'; // Change to global queue.

    // Return the queue.
    if (!queues[server]) queues[server] = [];
    return queues[server];
   }

function isAdmin(member) {
  return member.hasPermission("ADMINISTRATOR")
}

function canSkip(member, queue) {
  if (ALLOW_ALL_SKIP) return true;
  else if (queue[0].requester === member.id) return true;
  else if (isAdmin(member)) return true;
  else return false;
}

	function executeQueue(msg, queue) {
		// If the queue is empty, finish.
		if (queue.length === 0) {
			msg.channel.send('Queue Concluded');

			// Leave the voice channel.
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
			if (voiceConnection !== null) return voiceConnection.disconnect();
		}

		new Promise((resolve, reject) => {
			// Join the voice channel if not already in one.
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
			if (voiceConnection === null) {
				if (CHANNEL) {
					msg.guild.channels.find('name', CHANNEL).join().then(connection => {
						resolve(connection);
					}).catch((error) => {
						console.log(error);
					});

				// Check if the user is in a voice channel.
				} else if (msg.member.voiceChannel) {
					msg.member.voiceChannel.join().then(connection => {
						resolve(connection);
					}).catch((error) => {
						console.log(error);
					});
				} else {
					// Otherwise, clear the queue and do nothing.
					queue.splice(0, queue.length);
					reject();
				}
			} else {
				resolve(voiceConnection);
			}
		}).then(connection => {
			// Get the first item in the queue.
			const video = queue[0];
			const play1 = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .setAuthor(`Now Playing: ${video.title}`, `${video.thumbnail}`)
      .setDescription('\n\n')
			.addField(`Link`, `[Click Here](${video.webpage_url})`)
      .setThumbnail(video.thumbnail)
		.setFooter(`Length: ${video.duration} | Requested by ${message.author.username}`)
var googleTTS = require('google-tts-api');

googleTTS(`${reason}`, 'en', 1)   // speed normal = 1 (default), slow = 0.24
.then(function (url) {
			// Play the video.
			msg.channel.sendEmbed(play1).then(() => {
				let dispatcher = connection.playStream(ytdl(video.webpage_url, {filter: 'audioonly'}), {seek: 0, volume: (DEFAULT_VOLUME/100)});

				connection.on('error', (error) => {
					// Skip to the next song.
					console.log(error);
					queue.shift();
					executeQueue(msg, queue);
				});

				dispatcher.on('error', (error) => {
					// Skip to the next song.
					message.reply(`There is an error playing the song requested. Shifting queue \n\nError: ${error}`)
					queue.shift();
					executeQueue(msg, queue);
				});

				dispatcher.on('end', () => {
					// Wait a second.
					setTimeout(() => {
						if (queue.length > 0) {
							// Remove the song from the queue.
							queue.shift();
							// Play the next song in the queue.
							executeQueue(msg, queue);
						}
					}, 1000);
				});
			}).catch((error) => {
				console.log(error);
			});
		}).catch((error) => {
			console.log(error);
		});
	}

if (!message.member.voiceChannel)
return message.channel.send('You need to be in a voice channel to use the command!');

const invaild1 = new Discord.RichEmbed()
.setTitle(' Error ')
.setColor(0xFF0000)
.setDescription('Inavild/Unsearchable Video! \nPlease try again')
.setFooter(`Error`)
.setTimestamp()

if (queue.length >= 20) {
  return message.channel.send('Maximum queue size reached!');
}

message.channel.send('Searching... ').then(response => {
  var searchstring = suffix
  if (!suffix.toLowerCase().startsWith('https')){
    searchstring = 'gvsearch1:' + suffix;
  }

    YoutubeDL.getInfo(searchstring, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
      if (err || info.format_id === undefined || info.format_id.startsWith('0')) {
        return message.channel.sendEmbed(invaild1);
      }


      info.requester = message.author.id;
      const queue1 = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .addField('Song Queued', `I have added ${info.title} to the queue!`)
      .setThumbnail(info.thumbnail)
      .setFooter(`Added by ${message.author.username}`)
      message.channel.sendEmbed(queue1).then(() => {
          queue.push(info);
          if (queue.length === 1) executeQueue(message, queue);
          }).catch(console.log);
        });
      }).catch(console.log);
  }
