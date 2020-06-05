const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the music",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("Ulan Amk Çocuğu Ses Kanalına Girsene 🤬");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Duraklatabileceğim hiçbir şey çalmıyor 🔴");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    serverQueue.textChannel.send("**Şarkının müzik çalmasını durdurdu**");
  }
};
