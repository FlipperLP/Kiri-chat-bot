const Discord = require('discord.js');

const client = new Discord.Client({ disableEveryone: true });

const mysql = require('mysql');

const fs = require('fs');

const config = require('./config/main.json');

config.env = new Discord.Collection();

// bot and mysql login
let token;
let host;
let user;
let password;
let database;
if (fs.existsSync('./config/test_token.json')) {
  const dev = require('./config/test_token.json');
  token = dev.token;
  host = dev.DB_host;
  user = dev.DB_user;
  password = dev.DB_passw;
  database = dev.DB_name;
  } else {
  token = process.env.BotToken;
  host = process.env.DB_host;
  user = process.env.DB_user;
  password = process.env.DB_passw;
  database = process.env.DB_name;
  }