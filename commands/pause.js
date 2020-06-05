module.exports = {
  name: "pause",
  description: "pause the song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("Ulan Amk Çocuğu Ses Kanalına Girsene 🤬");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Duraklatabileceğim hiçbir şey çalmıyor 🔴");
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("✔️  | Çalmakta Olan Şarkı Duraklattıldı")
  }  
  }
}
