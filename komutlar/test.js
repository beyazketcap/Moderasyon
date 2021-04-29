const Discord = require('discord.js');

exports.run = async (client, message) => {
  
  let mesaj = args.slice(0).join(' ')
  if (!mesaj.length < 1) return message.channel.send('Lütfen tekrar deneyin')
  
        message.delete()
      message.channel.send("V12 Temiz Altyapı")
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['adem'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "ares",
    description: "V12 Temiz Altyapı",
    usage: "ares",

  };