const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Bot aktif durumdadır.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username}`);
  client.user.setActivity(`Sepultura 💕 Assassin's`, { url: 'https://twitch.tv/atanoria', type: 'STREAMING' });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun bölümü ayarlandı.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` sunucuya hizmet veriliyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Hey! ,Bot Kullanılmaya Hazır.`)
};  