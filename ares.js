const Discord = require("discord.js");
const db = "quick.db";
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

console.log("Akıyor!!");

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.ares);

//---------- MESAJ YANIT ------------//
client.on("message", msg => {
  if (msg.content.toLowerCase() === "prefix") {
     msg.channel.send(".");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm selam,  hoş geldin ^^");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "günaydın") {
    msg.reply("Günaydın, hoş geldin");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "iyi geceler") {
    msg.reply("Sana da iyi geceler :) ");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "selam") {
    msg.reply("Aleyküm selam,  hoş geldin ^^");
  }
});

//----------- BOTU SESLİDE TUTMA ------------//

client.on("ready", async function() {
  const voiceChannel = "801730967910875188";
  client.channels.cache
    .get(voiceChannel)
    .join()
    .catch(err => {
      throw err;
    });
});

//--------- EVER HERE ENGEL----------//

let ehengel = JSON.parse(
  fs.readFileSync("./ayarlar/everhereengel.json", "utf8")
);

client.on("message", async function(msg) {
  if (!msg.guild) {
  } else {
    if (!ehengel[msg.guild.id]) {
    } else {
      if (ehengel[msg.guild.id].sistem == false) {
      } else if (ehengel[msg.guild.id].sistem == true) {
        if (msg.author.id == msg.guild.ownerID) {
        } else {
          if (msg.content.includes("@everyone")) {
            msg.delete();
            msg
              .reply(
                "Hey, dostum ben botum ve herşeyi görürüm. Bu yüzdende `everyone` atmana izin veremem!"
              )
              .then(msj => msj.delete(3200));
          } else {
          }

          if (msg.content.includes("@here")) {
            msg.delete();
            msg
              .reply(
                "Hey, dostum ben botum ve herşeyi görürüm. Bu yüzdende `here` atmana izin veremem!"
              )
              .then(msj => msj.delete(3200));
          } else {
          }
        }
      }
    }
  }
});

//------------ KÜFÜR ENGEL -------------//


//-----------------------------------JAİL---------------------------------------------------\\

client.on("guildMemberAdd", async member => {
  const data = require("quick.db");
  const asd = data.fetch(`${member.guild.id}.jail.${member.id}`);
  if (asd) {
    let data2 = await data.fetch(`jailrol_${member.guild.id}`);
    let rol = member.guild.roles.cache.get(data2);
    if (!rol) return;
    let kişi = member.guild.members.cache.get(member.id);
    kişi.roles.add(rol.id);
    kişi.roles.cache.forEach(r => {
      kişi.roles.remove(r.id);
      data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id);
    });
    data.set(`${member.guild.id}.jail.${kişi.id}`);
    const wasted = new Discord.MessageEmbed()
      .setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
      .setColor(`#0x800d0d`)
      .setDescription(
        `Dostum hadi ama !!! jailden Kaçamazsın ikimizde birbirimizi kandırmayalım...!`
      )
      .setTimestamp();
    member.send(wasted);
  }
});
//------------------------------------JAİL--------------------------------------------------\\



//------------------------------------Mute--------------------------------------------------\\

client.on("guildMemberAdd", async member => {
  const data = require("quick.db");
  const asd = data.fetch(`${member.guild.id}.jail.${member.id}`);
  if (asd) {
    let data2 = await data.fetch(`jailrol_${member.guild.id}`);
    let rol = member.guild.roles.cache.get(data2);
    if (!rol) return;
    let kişi = member.guild.members.cache.get(member.id);
    kişi.roles.add(rol.id);
    kişi.roles.cache.forEach(r => {
      kişi.roles.remove(r.id);
      data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id);
    });
    data.set(`${member.guild.id}.jail.${kişi.id}`);
    const wasted = new Discord.MessageEmbed()
      .setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
      .setColor(`#0x800d0d`)
      .setDescription(
        `Dostum hadi ama !!! Muteden Kaçamazsın ikimizde birbirimizi kandırmayalım...!`
      )
      .setTimestamp();
    member.send(wasted);
  }
});

//--------------TAG ALANA ROL VER -----------------//

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    const tag = "⚔";
    const sunucu = "664472621248806922";
    const log = "802515409822941234";
    const rol = "803278544717217804";

    try {
      if (
        newUser.username.includes(tag) &&
        !client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.cache.has(rol)
      ) {
        await client.channels.cache
          .get(log)
          .send(
            new Discord.MessageEmbed()
              .setColor("GREEN")
              .setDescription(
                `**${newUser} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim.** **Ailemize hoşgeldin** <a:Assassins_pixelkalp:800605439322488872>`
              )
          );
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.add(rol);
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .send(
            `**Selam ${
              newUser.username
            }**, **Sunucumuzda Tagımızı Aldığın İçin** ${
              client.guilds.cache.get(sunucu).roles.cache.get(rol).name
            } **Rolünü Sana Verdim.** **Ailemize hoşgeldin** <a:Assassins_pixelkalp:800605439322488872>`
          );
      }
      if (
        !newUser.username.includes(tag) &&
        client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.cache.has(rol)
      ) {
        await client.channels.cache
          .get(log)
          .send(
            new Discord.MessageEmbed()
              .setColor("RED")
              .setDescription(
                `**${newUser} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım**`
              )
          );
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.remove(rol);
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .send(
            `**Selam **${
              newUser.username
            }**, **Sunucumuzda Tagımızı Çıkardığın İçin** ${
              client.guilds.cache.get(sunucu).roles.cache.get(rol).name
            } Rolünü Senden Aldım!**`
          );
      }
    } catch (e) {
      console.log(`Bir hata oluştu! ${e}`);
    }
  }
});


//---------------------REKLAM ENGEL-----------------------//

