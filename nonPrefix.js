module.exports = { msg }
async function msg(message, color, p, time) {
	if (message.type == 'chat') {
		const text = message.body.toLowerCase() 
		switch (true) {
			case text.startsWith('an error'): 
				 sclient.reply(message.from, 'Link!', message.id)
				 break
			case text.startsWith('omae wa mou shindeiru'): 
				return sclient.reply(message.from, 'NANI!!', message.id)
				break
			case text.startsWith('paypal'): 
				return sclient.reply(message.from, 'https://paypal.me/lucasalchapar', message.id)
				break
			case text.startsWith('creador'): 
				return sclient.reply(message.from, 'Manda mensaje solo si es algo importante +34605735266', message.id)
				break
			case text.startsWith('AiramM'): 
				return sclient.reply(message.from, 'AiramMariconMaricon!!', message.id)
				break
		       /* eg case text.startsWith('your text'): 
				sclient.reply(message.from, 'response' message.id) 
				break*/
		}
	}
	if (p) return console.log('[RECV]', color(time, 'yellow'), 'Message from', color(message.sender.pushname))
	if (!p) return console.log('[RECV]', color(time, 'yellow'), 'Message from', color(message.sender.pushname), 'in', color(message.chat['name']))
}

			
