const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.get("664472621248806922") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanmaya Yetkin Yok.")).setColor('BLACK')

	if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz.');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    var jaus =  message.guild.members.cache.filter(r=>r.roles.cache.has("836157254918209599")).size.toString()
    var erkek =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724048162095165")).size.toString()
    var kız =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724047817768970")).size.toString()
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let jaus2 = '⚔'
    const jausunuz = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${message.guild.name}`, `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp`)
        .setDescription(`
        <a:assassins_Yonok:827100827943960576> Sunucuda toplam \`${message.guild.memberCount}\` Üye bulunmaktadır. <a:assassins_beyazdc:820723367195836416> \n 
        <a:assassins_Yonok:827100827943960576>  Sesli sohbette \`${count}\` Kişi bulunmaktadır.<a:assassins_voice:820940751458009139> \n
        <a:assassins_Yonok:827100827943960576>  Tagda toplam \`${message.guild.members.cache.filter(m => m.user.username.includes(jaus2)).size}\` Kişi bulunmaktadır.\` ⚔ \`\n 
        <a:assassins_Yonok:827100827943960576>  Toplam \`${erkek}\` Erkek bulunmaktadır.\` ♂  \` \n 
        <a:assassins_Yonok:827100827943960576>  Toplam \`${kız}\` Kız bulunmaktadır.\` ♀ \`\n 
        <a:assassins_Yonok:827100827943960576>  Toplam booster \`${jaus}\` Kişi bulunmaktadır.<a:Assassins_booster:836257198182236241>`)
    
        .setThumbnail(message.author.avatarURL())
           .setTimestamp()
    .setFooter(`Synayzen`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};


