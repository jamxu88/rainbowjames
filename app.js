const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  console.log(message.author.id)
  function change0() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("James🌹");
  }
  function change1() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("James");
  }
  function change2() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("Jame");
  }
  function change3() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("Jam");
  }
  function change4() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("Ja");
  }
  function change5() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("J");
  }
  function change6() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("Ja");
  }
  function change7() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("Jam");
  }
  function change8() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("Jame");
  }
  function change9() {
    let userid = message.guild.members.get("289523788822085632");
    userid.setNickname("James");
  }
  function change10() {
    let userid = message.guild.members.get("289523788822085632");
    setTimeout(change0(), 0);
    setTimeout(change1(), 1000);
    setTimeout(change2(), 2000);
    setTimeout(change3(), 3000);
    setTimeout(change4(), 4000);
    setTimeout(change5(), 5000);
    setTimeout(change4(), 6000);
    setTimeout(change3(), 7000);
    setTimeout(change2(), 8000);
    setTimeout(change1(), 9000);
    setTimeout(change0(), 10000);
  }
  if (message.content.startsWith("<@530165753811304449>")) {
    setInterval(() => { change10(); }, 55000);
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
