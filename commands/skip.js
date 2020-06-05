module.exports = {
  name: "skip",
  description: "Skip the song or shift song to next",
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

    serverQueue.connection.dispatcher.end();
    message.channel.send("✔️ | Şarkıyı Atladım");
  }
};
