const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  console.log(message.author.id)
  function change() {   
    message.guild.members.get(289523788822085632).setNickname("James🌹");
    message.guild.members.get(289523788822085632).setNickname("James");
    message.guild.members.get(289523788822085632).setNickname("Jame");
    message.guild.members.get(289523788822085632).setNickname("Jam");
    message.guild.members.get(289523788822085632).setNickname("Ja");
    message.guild.members.get(289523788822085632).setNickname("J");
    message.guild.members.get(289523788822085632).setNickname("Ja");
    message.guild.members.get(289523788822085632).setNickname("Jam");
    message.guild.members.get(289523788822085632).setNickname("Jame");
    message.guild.members.get(289523788822085632).setNickname("James");
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
