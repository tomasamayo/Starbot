let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de StarBot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ

*2.-* https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs

*3.-* https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F

*4.-* https://chat.whatsapp.com/CjexkGVr37J6GuSdDVAHzC

*5.-* https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb

*6.-* https://chat.whatsapp.com/GvrLSUSzVuT9P17CKfdxDa

*7.-* https://chat.whatsapp.com/HylyPaLc49b9DWF67K8pdc

*8.-* https://chat.whatsapp.com/IW12dLVoyWGHreGpX7rQIw

*9.-* https://chat.whatsapp.com/Ef89aIuOLeD3Fa2sYmKwp7

*10.-* https://chat.whatsapp.com/C2WYb1hiiijCI13QSUZLM9
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 Starbot 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
