const Discord = require('discord.js');
const client = new Discord.Client();

const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');


var PREFIX = '='

const queues = require('../modules/queues.js');

exports.run = function(client, message) {

const msg = message.content.trim();
const command = msg.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
const suffix = msg.substring(PREFIX.length + command.length).trim();

let DEFAULT_VOLUME = 50
let CHANNEL = false;

        function getQueue(server) {
            // Check if global queues are enabled.
            if (global) server = ''; // Change to global queue.

            // Return the queue.
            if (!queues[server]) queues[server] = [];
            return queues[server];
        }


        const queue = getQueue(message.guild.id);

        const text1 = queue.map((video, index) => (
            (index + 1) + ': ' + video.title + `  |  [${video.duration}]`
        ))


        // Get the status of the queue.
        let queueStatus = 'Stopped';
        const voiceConnection = client.voiceConnections.get('server', message.server);

        // Send the queue and status.
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .addField(`Queue:`, `${text1.join("\n")}`)
        return message.channel.send({embed});
}
