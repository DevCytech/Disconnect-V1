const { bot } = require('../../index');

bot.on('disconnect', async event => {
	const { config, discord } = bot.tools;

	const e = new discord.RichEmbed()
		.setTitle('🎶 Disconnected!')
		.setColor(config.colors.warning)
		.setDescription(event)
		.setFooter(getTime());
	var channel = bot.channels.get('622619858600984586');
	if (channel == undefined || channel == null) return;
	channel.send(e);
});

function getTime() {
	let date = new Date();

	if (date.getHours() >= 13) {
		return date.getHours() - 12 + ':' + date.getMinutes() + ' PM';
	} else {
		return date.getHours() + ':' + date.getMinutes() + ' AM';
	}
}
