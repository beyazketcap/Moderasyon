
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`

 > ➥ Kickleme -> \`.kick <@kullanıcı> [sebep] \`
 
 > ➥ Muteleme -> \`.mute <@etiket> \`
 
 > ➥ Sicil sorgulama -> \`.sicil <@etiket> \`
 
 > ➥ Sicil gösterme -> \`.sicil  \`
 
 > ➥ Arkadaşının hangi kanalda olduğunu bulma -> \`.kontrol <@arkın> \`
 
 > ➥ Ban kaldırma -> \`.unban <@kullanıcı> [sebep] \`
 
 > ➥ Jail kaldırma -> \` .unjail <@etiket> \`
 
 > ➥ Mute kaldırma -> \`.unmute <@etiket> \`
 
 > ➥ Yapımcı -> \`.yapımcım \`

 > ➥ Şikayet de bulunursunuz. -> \`.şikayet <Şikayet Nedeni> \`

 > ➥ Canlı Destek Tablebi Oluşturur -> \`.canlıdestek \`
 
 > ➥ Taglı sayısı -> \`.taglı \`
 
 > ➥ Sesli Kanalda Olan Yetkililer -> \` .sesteki-yetkililer \`
 
 > ➥ Ceza verme -> \`.jail <@etiket>.\``)
 .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953813688340/811151325445357578/asas.gif")
message.channel.send(embed) 
//sharpen
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',   //sharpen
  description: '',
  usage: ''
};