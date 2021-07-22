require('dotenv').config({path:'./src/envs/.env'})
const Discord = require('discord.js');
const ytdl = require('ytdl-core')
const ClientEvents = Discord.Constants.Events;
const client = new Discord.Client();


const StartEvent = require('./src/app/events/StartEvent')
const RegexUtils = require('./src/app/utils/RegexUtils')
const RegexEnum = require ('./src/app/enums/RegexEnum')

console.log(process.env.Auth_Token)
client.login(process.env.Auth_Token);


client.on(ClientEvents.CLIENT_READY , () => {
    console.log(`Started At ${new Date()}`);
    StartEvent.doEvent(client)
    RegexUtils.isRegexCompativelComTexto(
        "!!play https://www.youtube.com/watch?v=WZIGwN-5Ioo in <#861605749226209310>", 
        RegexEnum.values().youtube.pattern
    )
});


const streamOptions = {seek:0, volume:1};

client.on(ClientEvents.MESSAGE_CREATE , (message) => {
    if(!message.author.bot){
        if(message.content.indexOf("<#") !== -1) {
            let voice = message.guild.channels.resolve('861605749226209310')
            voice.join().then( connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=WZIGwN-5Ioo', { quality:'highestaudio' ,filter: 'audioonly'})
                const playMusic = connection.play(stream);
                playMusic.on('end', () => {
                    voice.leave();
                })
            })
        }
    }
})