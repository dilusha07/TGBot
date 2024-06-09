const { Telegraf } = require('telegraf');
const config = require('../src/config.json');
const { addUserToDatabase } = require('./database');

const bot = new Telegraf(config.BOT_TOKEN);

function userRegistration(ctx) {
    ctx.reply("Please provide your name:");
    
    bot.on('text', async (msg) => {
      const name = msg.text;
      ctx.reply("Please provide your email:");
      
     bot.on('text', async (msg) => {
        const email = msg.text;
        ctx.reply("How many tickets do you need?");
        
        bot.on('text', async (msg) => {
          const tickets = msg.text;
          
          const user = {
            id: ctx.from.id,
            name: name,
            email: email,
            tickets: tickets
          };
          
          addUserToDatabase(user);
          ctx.reply(`Thank you, ${name}. Your tickets have been confirmed!`);
        });
      });
    });
  }

module.exports = { userRegistration };