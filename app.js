const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  function change() {  
    let jam = message.guild.roles.get("530156981542060043");
    let admins = message.guild.roles.get("509097329240834048");
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    jam.edit({color: random});
    admins.edit({color: random});
  }
    setInterval(() => { change(); }, 1200);
  });
client.login(process.env.BOT_TOKEN);
