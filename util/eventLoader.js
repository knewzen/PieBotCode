const reqEvent = (event) => require (`../events/${event}`)
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
      client.on('reconnecting', () => reqEvent('reconnecting')(client));
      client.on('disconnect', () => reqEvent('disconnect')(client));
      client.on('message', reqEvent('message'));
      client.on('guildDelete', reqEvent('guildDelete'));
      client.on('guildCreate', reqEvent('guildCreate'));
};
