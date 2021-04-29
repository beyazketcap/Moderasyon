//----------------YAPIMCIM-----------------------------//
const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("Yapımcılar")
  .setDescription("[**Yapımcım = <@664461407290523659>**]() Sepultura 💕  ")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: '',
  usage: ''
};