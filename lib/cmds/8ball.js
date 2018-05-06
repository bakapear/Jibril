module.exports = {
	name: ["8ball"],
	desc: "Ask it something!",
	permission: "",
	usage: "(question)",
	args: 0,
	command: function (msg, cmd, args) {
		msg.channel.send(answers[Math.floor(Math.random() * answers.length)]);
	}
}

let answers = [
	":8ball: It is certain",
	":8ball: It is decidedly so",
	":8ball: Without a doubt",
	":8ball: Yes definitely",
	":8ball: You may rely on it",
	":8ball: As I see it, yes",
	":8ball: Most likely",
	":8ball: Outlook good",
	":8ball: Yes",
	":8ball: Signs point to yes",
	":8ball: Reply hazy try again",
	":8ball: Ask again later",
	":8ball: Better not tell you now",
	":8ball: Cannot predict now",
	":8ball: Concentrate and ask again",
	":8ball: Don't count on it",
	":8ball: My reply is no",
	":8ball: Outlook not so good",
	":8ball: Very doubtful"
];