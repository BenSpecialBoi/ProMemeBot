const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./config.json')
const math = require("math-expression-evaluator")

////virgulele in file .JSON sunt extrem de importante. Se pun peste tot mai putin la sfarsit.

bot.on("ready", () => {
console.log(`${bot.user.username} is ready for za memez`)
bot.user.setStatus("dnd")
});

bot.on("message", (message) => {
	
	let command = message.content.split(" ")[0];
	command = command.slice(config.pf.length);
	
	let args = message.content.split(" ").slice(1);
	
	let mention = message.mentions.members.first();
	
///cmds without prefix

	if (message.author.bot) return;
	else {

	if (message.content.startsWith("2 + 2 is 4")) {
		message.channel.send("- 1 that's 3 QUICK MATHS")
	}
	if (message.content.startsWith("gay") || message.content.startsWith("Gay")) {
		message.channel.send("《☆< y do u did dis? >☆》")
	}
	if (message.content.startsWith("To the pedo mobile!")) {
		var embed = new Discord.RichEmbed()
		.setTitle("Tanananana!")
		.setImage("https://static.fjcdn.com/pictures/Pedo_36e86c_44042.jpg")
		.setColor('e407a9')
		message.channel.send(embed)
	}
	if (message.content.startsWith("Fuck you") || message.content.startsWith("Fuck off") || message.content.startsWith("Fuck me") || message.content.startsWith("fuck off") || message.content.startsWith("fuck you") || message.content.startsWith("fuck me") || message.content.startsWith("fuck u")) {
		message.channel.send("Stop swearing or I'll eat ur ball sack!")
	}
	if (message.content.startsWith("Hi") || message.content.startsWith("hi") || message.content.startsWith("Hello") || message.content.startsWith("hello")) {
		message.reply("Hi")
	}
    
///cmds with prefix

	if (!message.content.startsWith(config.pf)) return;
	else {
	
	if (command === "ping") {
		message.channel.send("Pong!")
	}
	if (command === "say") {
		message.channel.send(`${args.join(" ")}`)
	}
	if (command === "sayd") {
		message.channel.send(`${args.join(" ")}`)
		message.delete(10)
	}
	if (command === "avatar") {
		if(!args[0]) {
			message.reply("Insert meme here XD")
		}
		else { 
			message.channel.send(mention.user.avatarURL)
		}
	}
	if (command === "embed") {
		var embed = new Discord.RichEmbed()
		.setTitle(`${args.join(" ")}`)
		.setColor('e407a9')
		message.channel.send(embed)
	}
	if (command === "embedd") {
		var embed = new Discord.RichEmbed()
		.setTitle(`${args.join(" ")}`)
		.setColor('e407a9')
		message.channel.send(embed)
		message.delete(10)
	}
	if (command === "dm") {
		if(!args[0]) {
			message.reply("Insert meme here XD")
		}
		else {
		message.author.send(`${args.join(" ")}`)
		}
	}
	if (command ==="help") {
		var embed = new Discord.RichEmbed()
			.setTitle (`Help`)
			.addField (`Prefix`,`++`)
			.addField (`ping`,`The bot says Pong!`)
			.addField (`say`,`Make the bot say something`)
			.addField (`sayd`,`Make the bot say something and delete your message`)
			.addField (`avatar`,`The bot shows someone's pfp`)
			.addField (`embed`,`Make the bot say something in a little box`)
			.addField (`embedd`,`Make the bot say something in a litle box an delete your message`)
			.setColor('e407a9')
			.setThumbnail(bot.user.avatarURL)
			.setFooter(message.author.username, message.author.avatarURL)
		message.channel.send(embed)
	}
	
////randomizers

	var ball = ["yes", "no", "hopefully not", "hopefully"]
	let Picked = ball[Math.floor(Math.random() * ball.length)]
	
	if (command === "8ball"){
		if(!args[0]) {
			message.reply("Insert meme here XD")
		}
		else { 
		message.channel.send(Picked)
	 }
	}
////big boi commands	
	
	if (command === "calc" || command === "calculate" || command === "solve") {
	let question = message.content.split(' ').slice(1).join(' ');
    if (question == '' || question === undefined) return message.channel.send('Make an equation (2+2)');
    if (question) {
        try {
        let answer = math.eval(question);
        let mathEmbed = new Discord.RichEmbed()
            .setDescription('Equation:' + ' `' + `${question}` + '`')
            .addField('Answer:' ,  ' `' + `${answer}` + '`')
            .setColor('e407a9')
            .setFooter(message.author.username, message.author.avatarURL)
            message.channel.send({embed: mathEmbed}).catch(message.error);
        } catch(e) {
            message.channel.send(`**:x: Invalid Equation:**` + ' `' + `${e.message}` + '`');
        }
    }
  }
	
////owner commands

	if (command === "setgame") {
		if(!args[0]) {
			message.reply("Insert meme here XD")
		}
		else {
			if (message.author.id != (config.ownerID)) {
				message.reply('u r not my master')
			} else {
		message.channel.send(`Game set to: ${args.join(" ")}`)	
		bot.user.setGame(`${args.join(" ")}`)
		}
	}
	}
	
	if (command === "setname") {
		if(!args[0]) {
			message.reply("Insert meme here XD")
		}
		else {
			if (message.author.id != (config.ownerID)) {
				message.reply('u r not my master')
			} else {
			bot.user.setUsername(`${args.join(" ")}`)
			message.channel.send(`Name changed to: ${args.join(" ")}`)
	}
	}}
}}})

bot.login(process.env.BOT_TOKEN);
