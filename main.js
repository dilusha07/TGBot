require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
//const bot = new Telegraf("6872311118:AAHuEAqAwtJzy2IC-Vv2vUzvU1zPJtmJaZE");

bot.start((ctx) => ctx.reply('Welcome to the TGBot!'));

bot.command('register', async (ctx) => { ctx.reply('Initiates the ticket registration process')});

bot.help((ctx) => ctx.reply('Bot Commands:\n/start - Greets the user and provides event details\n/stop - Stop the bot\n/register -  Initiates the ticket registration process.\n/help - Provides help and usage instructions.'));

bot.launch();



const express = require('express');

const app = express();
const port = 3001;
app.get('/', (req, res) => {
  res.send('Hello Bot!');
});


//Server port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});