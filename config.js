//my secript by MR DEATH LUMINOUS  LUMINOUS v1
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "ཀ͜͡B̈ÜG̈_̈LUMINOUS V̈1👾༑"
global.dana = "243890432038"
global.qris = "https://i.postimg.cc/VsWWH3gY/DEATH MD-BUG-LUMINOUS-V1.jpg"


// GLOBAL SETTING
global.owner = "243890432039"
global.namabot = "ཀ͜͡B̈ÜG̈_̈LUMINOUS V̈1👾༑"
global.nomorbot = "243890432039"
global.nameCreator = "💀Mr.Death Luminous 💀"
global.linkyt = "https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.postimg.cc/VsWWH3gY/DEATH MD-BUG-LUMINOUS-V1.jpg'
global.isLink = "https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f"
global.packname = "ཀ͜͡B̈ÜG̈_̈LUMINOUS V̈1👾༑"
global.author = "💀Mr.Death Luminous 💀"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})