const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on('message', async message => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
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
  async function change10() {
    let userid = message.guild.members.get("289523788822085632");
    console.log("cycle");
    change0();
    await sleep(2000);
    change1();
    await sleep(2000);
    change2();
    await sleep(2000);
    change3();
    await sleep(2000);
    change4();
    await sleep(2000);
    change5();
    await sleep(2000);
    change4();
    await sleep(2000);
    change3();
    await sleep(2000);
    change2();
    await sleep(2000);
    change1();
    await sleep(2000);
  }
  if (message.content.startsWith("<@530165753811304449>")) {
    setInterval(() => { change10(); }, 20000);
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
