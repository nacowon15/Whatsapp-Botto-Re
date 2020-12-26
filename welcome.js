var emojiStrip = require('emoji-strip')
const fs = require('fs-extra')

module.exports = welcome = async (client, event) => {

	const wel = JSON.parse(fs.readFileSync('./lib/welcome.json'))
  	const isWel = wel.includes(event.chat)
  	try {
  		if (event.action == 'add' && isWel) {
  			const det = await client.getChatById(event.chat)
  			const person = await client.getContact(event.who)
  			await client.sendTextWithMentions(event.chat, `Bienvenido *${det.contact.formattedName}!* \n\n@${event.who.replace('@c.us', '')} \n\nDiviértete con nosotros✨ \n\n *Descripción del Grupo* ❤️ \n\n ${det.groupMetadata.desc}`)
  		} 
	} catch(err) {
		console.log(err)
	}
}

