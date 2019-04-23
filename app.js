const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  console.log(message.author.id)
  function change() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setUsername("James🌹");
    userid.setUsername("James");
    userid.setUsername("Jame");
    userid.setUsername("Jam");
    userid.setUsername("Ja");
    userid.setUsername("J");
    userid.setUsername("Ja");
    userid.setUsername("Jam");
    userid.setUsername("Jame");
    userid.setUsername("James");
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
