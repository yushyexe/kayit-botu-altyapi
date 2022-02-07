const nyreez = require("aoi.js")
var fs = require('fs')
const bot = new nyreez.Bot({
    token: process.env.token,
    prefix:"$getServerVar[prefix]" //Ayarlanabilir prefix için
})
bot.onJoined()
bot.onLeave()
bot.onMessage()

bot.loadCommands(`./komutlar/`)

bot.command({
name: "ping",
code: `$description[Pingim: \`$ping\`]
$footer[Nyreez Dev.] `
})

bot.joinCommand({
    channel: '$getServerVar[kkanal]',
    code: `
  $color[GREEN]
  <@$authorID> <@&$getServerVar[kgörevli]>
$title[Bir Üye Lobiye Giriş Yaptı]

$description[$thumbnail[$userAvatar[$authorID]]
:vibe~1: Hoş Geldin <@$authorID>

Seninle Birlikte $membersCount kişiyiz

Hesap Kuruluş Tarihi : $creationDate[$authorID]
$footer[Laixa Kayıt Sistemi] $addTimestamp
`
});

bot.joinCommand({
        channel: "$getServerVar[otorollog]", 
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
        <@$authorID> Sunucumuza Hoşgeldin ! Otorol Başarıyla Verildi.
        `
})
bot.onJoined()

bot.status({
    text: "Nyreez Dev.",
    type: "PLAYING",
    status: "dnd", //online çevrimiçi idle boşta dnd rahatsız etmeyin
    time: 12
})

bot.variables({
  kayıt: "kapalı",
  kkanal: "yok",
  arol: "",
  vrol: "",
  kgörevli: "yok",
  ktag: "",
  otorollog: "",
  otorol: "",
  prefix: "!", //Prefixiniz
  })
