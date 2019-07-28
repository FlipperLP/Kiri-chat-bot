const Discord = require('discord.js');

const client = new Discord.Client({ disableEveryone: true });

const mysql = require('mysql');

const fs = require('fs');

if (fs.existsSync('./config/test_token.json')) {
    client.login(token.token);
  } else {
    client.login(process.env.BOT_TOKEN);
  }