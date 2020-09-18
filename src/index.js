'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    if (!process.env.TOKEN) {
        throw new Error("ERROR: You need to create a file called .env then add \"TOKEN = (https://discord.com/developers/applications Token goes here)\"");
    }
}
var test = 5;
let testa = 5;
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Bot has logged into ${client.user.tag}`);
});
client.login(process.env.TOKEN);