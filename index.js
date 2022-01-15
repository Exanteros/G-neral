const Discord = require("discord.js");
const config = require("./config.json");
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS","GUILD_MESSAGES"] })
client.login(config.BOT_TOKEN);
client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})
const prefix = "$";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`:ping_pong: Pong! Dein Schwanz hat ne länge von ${timeTaken}cm.`);
  }

	if (command === 'commands') {
		const timeTaken = Date.now() - message.createdTimestamp;
		const exampleEmbed = new MessageEmbed()
			.setColor('#4387f5')
			.setTitle('Commands:')
			.setDescription('Alle Commands bis zur letzten Haarspitze: ')
			.addFields(
				{ name: "`ping`", value: 'Schwanzlängenvergleich' },
				{ name: "`pong`", value: 'Extrem Geheim' },
				{ name: "`stonks`", value: 'Messe deinen Reichtum' },
				{ name: "`boobs`", value: 'Boobslängenvergleich (Achtung NSFW)' },
				{ name: "`honk`", value: 'Honking Goose' },
				{ name: "`sum`", value: 'Rechnen mit Zahlen' },
				{ name: "`Warnung:`", value: `Deine Schwanzlänge ist im Moment: ${timeTaken}cm.` },)
			.setFooter(`Sponsored by gaeneral.ml`)

		message.channel.send({embeds: [exampleEmbed]})
		
}
if (command === "boobs") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`:ping_pong: Pong! Deine Boobs haben eine Größe von ${timeTaken}cm.`);
    message.channel.send({
    files: [{
    attachment: '/home/cedric/Schreibtisch/DiscordBot/boobs.gif',
    name: 'boobs.gif'
}]
})
}
if (command === "stonks") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`:astonished: STONKS! Deine Aktien sind im Moment ${timeTaken}€ wert.`);
    message.channel.send({
    files: [{
    attachment: '/home/cedric/Schreibtisch/DiscordBot/stonks.gif',
    name: 'stonks.gif'
}]
})
}

if (command === "honk") {
message.reply(`<@142700651829264384>`);
message.channel.send({
files: [{
attachment: '/home/cedric/Schreibtisch/DiscordBot/honk.gif',
name: 'honk.gif'
}]
})
}

  if (command === "pong") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`:ping_pong: Ping! Dachtest du wirklich es kommt etwas?`);
  }
  if (command === "iq") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Dein IQ ist ${timeTaken}`);
    
if (command === "schwanz") {
message.reply(`Kekswerfer_ hat nen **übelst** kleinen **Schwanz!** OH BOI! @everyone`);
}
  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`Das Ergebnis ist ${sum}!`);
  }
}});
client.on('messageCreate', (message) => {
    if(message.content.toLowerCase().includes('sehrwohl')) {
			message.reply('FOLGE DEM FÜHRER! FOLGE ${user}! SIEG_E HEIL_EN');
	}
});
client.on('messageCreate', (message) => {
    if(message.content.toLowerCase().includes('stefan')) {
			message.reply('I NEED A HERO! ');
	}
});

client.on("ready", () => {
client.user.setActivity('$commands ', { type: 'WATCHING' })
});
client.login(config.BOT_TOKEN);
