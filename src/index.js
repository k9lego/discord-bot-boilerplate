'use strict';

/*
! You'll notice that this shows up as RED and the below line as ORANGE if you install the "Better Comments" extension.
TODO: Install the extensions listed under "Dev Container:" at the very bottom, they are greyed out because they must be installed locally.
*/

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    if (!process.env.TOKEN) {
        throw new Error("ERROR: You need to create a file called .env then add \"TOKEN = (https://discord.com/developers/applications Token goes here)\"");
    }
}

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Bot has logged into ${client.user.tag}`);
});
client.login(process.env.TOKEN);