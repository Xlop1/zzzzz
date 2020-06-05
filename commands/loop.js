module.exports = {
  name: "loop",
  description: "LOOP THE QUEUE",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("Ulan Amk Çocuğu Ses Kanalına Girsene 🤬 ");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Oynattığın herhangi bir şey yok ⚠️");
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`Loop is now **${serverQueue.loop ? "Aktif ✔️" : "Kapalı ❌ "}**`)
    
    
    
    
  }
}
