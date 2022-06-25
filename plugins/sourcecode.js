let handler = async (m, {conn}) => {
     conn.reply(m.chat, `Follow my Instagram 📍\n\nhttp://instagram.com/_munavir._\n\n..`, m) 
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


