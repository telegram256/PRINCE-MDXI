const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-uVdQkZpb#Os8Qst8pQ1B7nCF0gMN6rc3d0GjaJHJ6TXZJdo5Gnkg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi 💁🏽 How Can I Assist You. Am alive Now.",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "fase",
BOT_NAME: process.env.BOT_NAME || "𝗣𝗥𝗜𝗡𝗖𝗘 𝗠𝗗𝗫",
OMDB_API_KEY: process.env.OMDB_API_KEY || "", // omdbapi.com
};



