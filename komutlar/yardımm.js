
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`

 > ➥ Ban log ayarlama -> \`.banlog-kanal <#kanal>.\`

 > ➥ Ban sistemini sıfırlama -> \` .bansistem-kapat.\`
 
 > ➥ Ban yetkilisini ayarlama -> \` .banyetkili-rol <@rol>.\`
 
 > ➥ Everyone engel aç ve kapat -> \` .eh-engel aç & kapat.\`
 
 > ➥ Kick log ayarlama -> \`.kicklog-kanal <#kanal>.\`
 
 > ➥ Kick sistemini sıfırlama -> \`.kicksistem-kapat>.\`
 
 > ➥ Kick yetkilisini ayarlama -> \` .kickyetkilisi-ayarla <@rol>.\`
 
 > ➥ Kanal kilitleme -> \` .kilit (1.kilitler 2.kapatır).\`
 
 > ➥ Son silinen mesajı gösterir -> \`.snipe.\`
 
 > ➥ Sohbeti açar ->\` .sohbet-aç.\`
 
 > ➥ Sohbeti kapatır -> \`.sohbet-kapat.\`
 
 > ➥ Mesaj temizleme -> \`.sil <sayı>.\`
 
 > ➥ Ban kaldırma -> \`.unban <@kullanıcı> [sebep].\`
 
 > ➥ Jail kaldırma -> \` .unjail <@etiket>.\`
 
 > ➥ Mute kaldırma -> \`.unmute <@etiket>.\`
 
 > ➥ Yapımcı -> \`.yapımcım.\`
 
 > ➥ Sayacı ayarlar -> \`.sayaç <sayı> <#kanal> / sıfırla.\`
 
 > ➥ Ceza verme -> \` .jail <@etiket>.\``)
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
  name: '/yetkili-moderasyon',   //sharpen
  description: '',
  usage: ''
};