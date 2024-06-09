const config = require('../src/config.json');

async function addUserToGroup(ctx) {
    try {
        const inviteLink = await ctx.telegram.createChatInviteLink(config.GROUP_ID, {
            member_limit: 100,
            expire_date: Math.floor(Date.now() / 1000) + 60 * 60 // Link expires in 1 hour
        });
        ctx.reply(`Thank you for registering! Here is your invite link to join the group: ${inviteLink.invite_link}`);
    } catch (error) {
        ctx.reply('Failed to create invite link:');
    }
}

module.exports = { addUserToGroup };


