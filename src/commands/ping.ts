import { createCommandConfig } from 'robo.js'
import type { ChatInputCommandInteraction, Client } from 'discord.js'

export const config = createCommandConfig({
	description: 'Pong!'
} as const)

export default (interaction: ChatInputCommandInteraction) => {
	const ping = interaction.client.ws.ping || 'N/A'
	interaction.reply(`Pong! \`${ping}\`ms`)
}
