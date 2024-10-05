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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94713562428";
global.style = process.env.STYLE || "1";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0wwakhDSmU2SERVWFAzR2pUZnlQb2J2YWQ3bGtiZ3ZHSlNPVGF1UFNWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHQxcDlYbDZsYXcwd0JiWDRYeGZTbzU4bUxjYVFUQ1hOck5vK2NkYnNSbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSHcwY3c3LzkxQS8xUW9hTTZVaTI2dGliSWtKeGVxVmtFMktaL1Rta1Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrcjFMb1J3Miswdmd3dUFpNnBrWDY4V2JCMTFZKzM4dk1xRnhIUFVsVmhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdDL0lUc04vNUllQWpoWFcwQ25oaEVIQlFJc3phOUdpY1lUclBZcXJHRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImduVGk3MldLQndMYWh4d3F2elBaS2NZcWs2RTFHSkVTdU9jRE41MWF4Vkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0p0eFQ4c3UwRFFmUTNuYjJLUlhTM1hLYTNwdXovNUdIclZUV0lWQWxFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODZNNjhac1BKcHh1OStNczZuMkJkc2Q5QUVvUm5ZK2d4OERKYjk0cHFuVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLM1NjUXllYktaR1M1V1grclVJTHFXN0QzeHBHWFZLMTFVcXBMK25nV3pqWUVrSWFZODVYODBqUUtWSXZFalBNTHNIYzhRdmIzNHFPQlpvQ0QxZWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJYQm83RW9VcXRTemdVMmMxOEF6aGtoSUozd2VyQ3dadjhqVzVTMVV1UTlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEzNTYyNDI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxMjM0M0I1ODUxQUZFOTU5NzBDNjg2QTE5OEJBQ0E4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgxMzYzNzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1qU0JZc0FzU0hxUV96b3hqZ3MwLWciLCJwaG9uZUlkIjoiMWJmNDVhYzMtODFkMC00OWI3LThjZGQtNzBkODU5MWY5OTUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUvQkhPdjV1S1E4elg4akZ5SVdTSS9EL0xnTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTGpzWU1BOUlwV3lBbHB3VnMyMFNKTW5sdjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNE1aWk1NNkciLCJtZSI6eyJpZCI6Ijk0NzEzNTYyNDI4OjY1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUFN1b0lCRUt5SmhiZ0dHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJScFhlck1yN1gvOXFrcFRFZmhMMllPdFdoNTIwTmlhQkxma3B3K0w0NEdnPSIsImFjY291bnRTaWduYXR1cmUiOiJNYmZiSGxuL085bjFnTUlKMm1vNjZ5ckdYWW45Z2lpZnpqeEFBRHU5VzhCM0UwYVRDSklvd1FGVml5ZHdTWXhocWRTRklCc0tCOG1KaTBDRWJBT0hDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUWVLZCttaCs4NFVsZStSMlR4NjlEbGw5cm1VN1krbjl6WjRndHNHTThCUkFybUJRNVlCSStPQkZOWmhpcnMwZEdYVjVhUlA0VGdPbEZXeENIam1raEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMzU2MjQyODo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVYVYzcXpLKzEvL2FwS1V4SDRTOW1EclZvZWR0RFltZ1MzNUtjUGkrT0JvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MTM2Mzc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtXRCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "pasiya",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
