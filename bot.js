const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
	client.user.setPresence({game:{name:"with master",type:0}});
});

client.on("message", (message) => {
	if (message.content === ".ping") {
		message.channel.send("pong");
	}
	else if (message.content === ".avatar") {
		message.reply(message.author.avatarURL);
	}
});

client.login(process.env.BOT_TOKEN);