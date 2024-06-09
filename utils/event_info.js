function sendEventDetails(ctx) {
    ctx.reply('Event Details:\nName:Ceylon On-chain Event\nDate: 15th June\nTime: 10 AM\nVenue: Ceylon Cash, Colombo, Sri Lanka');
  }
  
  module.exports = { sendEventDetails };
  
// const config = require('./config.json');

// function eventInfo() {
//   return `Event Details: \nEvent Name: ${config.event.name}\nDate: ${config.event.date}\nVenue: ${config.event.venue}`;
// }

// module.exports = { eventInfo };
