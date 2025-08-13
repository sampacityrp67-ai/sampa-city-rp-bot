const { Client, GatewayIntentBits } = require('discord.js');
const keepAlive = require('./keep_alive');

keepAlive();

const TOKEN = process.env.TOKEN; // Token vindo da variável de ambiente

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`Bot logado como ${client.user.tag}`);
    client.user.setPresence({
        activities: [{ name: '🌐 Sampa City RP', type: 3 }],
        status: 'online'
    });
});

client.login(TOKEN);
