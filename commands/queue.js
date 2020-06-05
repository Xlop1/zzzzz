module.exports = {
  name: "queue",
  description: "get list of added songs",
  execute: (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("Ulan Amk Çocuğu Ses Kanalına Girsene 🤬");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Kuyrukta hiçbir şey yok 🛑");
    }

    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};
