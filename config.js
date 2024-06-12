const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="0456mohassan@gmail.com "
global.location="Tanzania,Arusha."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "255616047117" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255624231409";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "allow,255624231409";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_26_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkyLFxuICAgICAgICA5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYkZPU1dQQ1FnVUgwUUdGYU5TVzBVcDJ3SHQ0QU85dGRuSjJXQjJubTZwbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibEo3b005eUxRYmlEOG5DUVN3T1E0d1wiLFxuICBcInBob25lSWRcIjogXCI5YjMxNGFiMC04M2IzLTRhNmUtOWVkZi0xZDJiZjUzMmUwZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgNDgsXG4gICAgICA2MixcbiAgICAgIDEsXG4gICAgICA2LFxuICAgICAgNDQsXG4gICAgICAyMCxcbiAgICAgIDI0MSxcbiAgICAgIDc5LFxuICAgICAgMjE4LFxuICAgICAgMTQwLFxuICAgICAgOTcsXG4gICAgICAxMTcsXG4gICAgICAxMjcsXG4gICAgICAxMjcsXG4gICAgICAxMDAsXG4gICAgICA5MixcbiAgICAgIDExMCxcbiAgICAgIDEzMSxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDI0LFxuICAgICAgMTMsXG4gICAgICAyMDgsXG4gICAgICAxNjAsXG4gICAgICAyMjUsXG4gICAgICA5MixcbiAgICAgIDEwMyxcbiAgICAgIDE3NSxcbiAgICAgIDIxMixcbiAgICAgIDE3NixcbiAgICAgIDU0LFxuICAgICAgMjA4LFxuICAgICAgMjEzLFxuICAgICAgNDMsXG4gICAgICA3NSxcbiAgICAgIDIyLFxuICAgICAgMTgwLFxuICAgICAgMTgyLFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQk02S0pNNjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYxNjA0NzExNzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW9oIEhhc3NcIixcbiAgICBcImxpZFwiOiBcIjY4OTIxODA5OTY1MTkwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG1Db0djUWhOMm9zd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJall3WWx0bVZTQmQxcEhoM2NIWGRjTmhhU0t5TkJiRHQyR3FqK1NzaFJVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBhTHBKV0pMMlVFWEJORk02VlFGNmNLa1B1emJ5RTBYeWRzRnZ2eGV6MEtydEg5eXpTZXpWemo3ekhyMWRxbUhoYWs0K3RYMnQyOHZMNXM1TEdDNkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkkzVWIwTHdGRVVIMkw5M0UwWFlsZVM2aFYvTjhQL1ZDWDErVWVlTHlJS05GU2RBV1lDSC9IK0JZaFJwMkZzQ3M5Qmc0Z0ltenYwRXFhdGNyRGU4UWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYxNjA0NzExNzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODIzNDc2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU01Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTVjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSWJUK1A1eGZENXBMVnI1SFNYR2dQWmowWm9uc1I5VUE1M1ZHbGFGV0FqST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTY1MzEyNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyMzMzNjYyMDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "berenger",
  packname: process.env.PACK_NAME || "moh",
  botname : process.env.BOT_NAME  || "moh berenger ",
  ownername:process.env.OWNER_NAME|| "mohtz45",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
