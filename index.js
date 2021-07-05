require('dotenv').config({path:'./src/environments/.env'})
const Discord = require('discord.js');
const client = new Discord.Client();

console.log(process.env)