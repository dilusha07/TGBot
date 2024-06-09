### Event Ticketing Bot for Telegram

## Introduction
This is a Telegram bot for event ticketing. It allows users to obtain free tickets and adds them to a dedicated Telegram group for the event.

## Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Configure your bot token and group ID in `src/config.json`.
5. Start the bot using `node src/main.js`.

## Usage
- `/start` - Greets the user and provides event details.
- `/register` - Initiates the ticket registration process.
- `/help` - Provides help and usage instructions.

## Testing
Run `node tests/test_main.js` to test the bot functionalities.