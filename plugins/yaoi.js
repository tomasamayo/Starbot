const axios = require('axios')
let handler = async(m, { conn }) => {if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let les = await axios.get('https://meme-api.herokuapp.com/gimme/yaoigif')
conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}`, m)
}
handler.help = ['yaoigif']
handler.tags = ['images']
handler.command = /^(yaoigif)$/i
handler.fail = null
module.exports = handler
