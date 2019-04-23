const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  console.log(message.author.id)
  function change() {   
    message.guild.members.get(289523788822085632).setUsername("James🌹");
    message.guild.members.get(289523788822085632).setUsername("James");
    message.guild.members.get(289523788822085632).setUsername("Jame");
    message.guild.members.get(289523788822085632).setUsername("Jam");
    message.guild.members.get(289523788822085632).setUsername("Ja");
    message.guild.members.get(289523788822085632).setUsername("J");
    message.guild.members.get(289523788822085632).setUsername("Ja");
    message.guild.members.get(289523788822085632).setUsername("Jam");
    message.guild.members.get(289523788822085632).setUsername("Jame");
    message.guild.members.get(289523788822085632).setUsername("James");
  }
  if (message.content.startsWith("<@530165753811304449>")) {
    setInterval(() => { change(); }, 1000);
  }else
  if (message.content.includes("rainbow")) {
    message.channel.send("no");
  }else
  if (message.content.startsWith("bot.client.<@530165753811304449>>>endProcess.cycle#3965")) {
    message.channel.send("Ending...");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  }
  });
client.login(process.env.BOT_TOKEN);
