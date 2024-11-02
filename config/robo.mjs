// @ts-check

/**
 * @type {import('robo.js').Config}
 **/
export default {
	clientOptions: {
		intents: ['Guilds', 'GuildMessages', 'GuildMessageTyping', 'GuildMessageReactions']
	},
	plugins: [],
	sage: {
		defer: false
	},
	type: 'robo'
}
