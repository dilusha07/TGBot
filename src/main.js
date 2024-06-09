const { Telegraf } = require('telegraf');
const config = require('../src/config.json');
const eventInfo = require('../utils/event_info');

const bot = new Telegraf(config.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome! to the Event bot!. Get ready for the event. \nType /register to get your ticket.');
  eventInfo.sendEventDetails(ctx);
});

bot.command('help', (ctx) => {
  ctx.reply('Bot Commands:\n/start - Start the bot and get event details\n/register - Register for the event\n/help - Show the bot commands');
});


bot.launch().then(() => {
  console.log('Bot is up and running');
}).catch(console.error);


// const express = require('express');

// const app = express();
// const port = 3001;
// app.get('/', (req, res) => {
//   res.send('Hello Bot!');
// });

// //Server port
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });