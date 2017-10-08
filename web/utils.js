const index = require('../app');

const moment = require('moment');

exports.getUserVisibleGuilds = (client, userID) => {
    return new Promise((resolve, reject) => {
            let websiteInfo = [];
    const guilds = client.guilds.array();
    for (const guild of guilds) {
        guild.fetchMember(userID).then(m => {

            let superMaintainer = index.config.maintainers.indexOf(userID) > -1;
        if (member.permissions.has("MANAGE_GUILD") || superMaintainer) {
            let guildObj = {
                id: guild.id,
                name: guild.name.replaceAll("'", " "),
                members: guild.memberCount,
                created: guild.createdAt.toDateString(),
                icon: guild.icon,
                iconURL: guild.iconURL || index.config.host + '/img/discord-icon.png',
                region: guild.region,
                rawCreated: moment(guild.createdAt),
                formattedCreated: Math.ceil((Date.now() - guild.createdAt) / 86400000),
                ownerAvatar: guild.owner.user.displayAvatarURL,
                ownerName: guild.owner.displayName,
                ownerUsername: guild.owner.user.tag
            };
            websiteInfo.push(guildObj);
        }

        //Test if last item
        if (guilds.indexOf(guild) === guilds.length) {
            resolve(websiteInfo)
        }
    }).catch(err => reject(err));
    }
});
};

String.prototype.replaceAll = function (search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
