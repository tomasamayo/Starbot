let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bot.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Starbot|Starbot|tsbb|TSBB|Star Brokers - Bot|Star brokers - bot|Star bot|Star bot|theStarbrokersbot|Star Bot|Hola Bot|hola bot|Hola bot|hola bot|StarBot|Starbot/
handler.command = new RegExp
module.exports = handler
