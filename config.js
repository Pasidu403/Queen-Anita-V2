//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNtRlhIOUNiRG5ydU9wbUhSTlhrSlE3SFFkOVdZM09OWjJGQ2Y3QmhFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pXcFBESFY1OGo3S0pCZ0RLZXBYamxIZU5jWkIxOGtYc1hRR1V5MDFrND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTjhSUUp6ZGt2MzgyQjVYQmFqeU9XRHpsWXF6cEJ3aFp6Wjh5eTdVTVhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFc0tJa2YwSlBRUzNHNzUxSkZUQ3JSZldnNUw0UHNZNlNLUEZFdGt1Sng0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGWVVrQ0xIR25IU3dFdjdKcGFqcW9xbkJvSUVtUFlVUTRGVDNiUTNqMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFtZCtUYmxKREJnRytnU3V1OGw3MW1yY0F4UmVsUHhnWUZ4T1RwUys3SDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hUZHd2R3dNKzBiOCtsemVKQ3l6bUVabGZOOGZsaGVoVHNpVDN4ZjVsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGYzMm1SaldEemNYWU9TcVhJeG5xelRER29USDBtdXphT2liOVNKTUVoQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0wellpWTQ5TWZ5aVk4aFoveFVQdlAxV3RzRWNYcFQ5VW9tMVhBbUFiRFlOU1U2NVFhWksrKzVpWEZGM0lRcjlDRk12Y3hKVncvblNTUjNNK0xyL2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InJEVzBWUkQ2SEZpYzc0dCtvVzM0UWdQUTMwdjVLeDY3bUhpelRMNzh3WUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTM1NjI0MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjI1REQzQzE4Q0Y1QkU2NUIzQTkzQkIzOTQ2MzZDNDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzk2MDUzNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicUh0ZGRDWFVRTy1wcU5aYXFKOHZpQSIsInBob25lSWQiOiJiNDRiZDg3MS05MGZmLTRjNTQtYmU0Ny0zZjUxMzQ0ZjlmM2UiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFRPeHRjMzhud1g1UHcrK28xTHF1SXpjYy9RPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlwWVdCV2dpTXdkL005Smk3eU5iZXlNeEhKdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4WUpROFhTUCIsIm1lIjp7ImlkIjoiOTQ3MTM1NjI0Mjg6NDlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4o+kzZ/Nn82ezZ4g8J2TpPCdk7fwnZO08J2Tt/Cdk7jwnZSA8J2TtyDDl82cw5cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01LTTBOVUNFTW1yK3JjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjIzMHpzYnJtc0x6aEJuRHJqUEc5OUY5QnNTYmFKWVZsK0hiSkdhWXUzQUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNmdWIzQVViaUQwOVpRTklOU1RFdml3N2NhUW1QNGtrOExyQ2JMY1hMN01zcFNLT2ZZQWh2cmdHdTBhQ1NzTERmSkdhbTJFVXdMeW5oVmh1SEZzVERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXMWFSUGRzKzFmN0tBaU9tUG5kOXlqbFRiQ08yZlQ4MXNKeHRTbm5ENW5EQXI4TFdnZ041cmluM0plS2NVRytWc2lENFJiZWExcWF0T292UE41SDVnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzEzNTYyNDI4OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR0OU03RzY1ckM4NFFadzY0enh2ZlJmUWJFbTJpV0ZaZmgyeVJtbUx0d0MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc5NjA1MzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGhwIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
