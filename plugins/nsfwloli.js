let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
heum = await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©Starbot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(nsfwloli)$/i
module.exports = handler
