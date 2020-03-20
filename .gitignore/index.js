const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Command: *help");
    console.log("Connectedç");
});

bot.login("NjkwMjkzNDc4NzMwODkxMzQ1.XnPjFg.7dZtgzjr-O_Sj0TjdyXSFgNPLSI");


bot.on('message', message=> {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.  :)");
        console.log("Commande Salut effectué");
    }
});
