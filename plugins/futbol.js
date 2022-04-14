const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/futbol")
let json = res.data
let StarBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, StarBot, "*Fútbol 🥅*", '©StarBot', '⚽ SIGUIENTE ⚽', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(futbol|fútbol)$/i
module.exports = handler
