const Discord = require("discord.js");
const myid = ['Your ID']
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);


client.on('message', message => {
  if (message.content === 'd') {
message.channel.send('#daily')
  }
  if(message.content === 'c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client.on('ready', async() => {
var server = "741732063283249212"; 
var channel = "741795238569574443";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**زبي فاجر **[ " ${x} " ]')
    },50);
})

