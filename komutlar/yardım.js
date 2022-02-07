module.exports = ({
    name: 'yardım',
    aliases: ["help"],
    code: `
  $color[RANDOM]
$title[__**Laixa Kayıt Sistemi**__]
$description[$thumbnail[$userAvatar[$clientID]]]

$addField[$getServerVar[prefix]kayıt;
Kayıt İşlemini Gerçekleştirir.]

$addField[$getServerVar[prefix]arol;
Üye Kayıt Edilince Alınacak Rol (Isterseniz Otorol Sistemini Ayarlaya bilirsiniz $getServerVar[prefix]otorol)]

$addField[$getServerVar[prefix]vrol;Üye Kayıt Edilince Verilecek Rol]

$addField[$getServerVar[prefix]kkanal;
Kayıt İşleminin Gerçekleştirileceği Kanalı Ayarlar]

$addField[$getServerVar[prefix]kgörevli;
Kayıt Görevlisini Ayarlar]

$addField[$getServerVar[prefix]kreset;
Kayıt Sistemini Resetler]

$addField[$getServerVar[prefix]ktag;
Üye Kayıt Edildiğinde İsmin Başına Belirlenen Tag Verilir]

$addField[$getServerVar[prefix]otorol;
Otorolü Ayarlar]

$addField[$getServerVar[prefix]otorolkapat;
Otorol Sistemini Kapatır]

$addField[$getServerVar[prefix]prefix;
Sunucu Prefixini Ayarlar]
  $footer[$username;$authorAvatar]
$addTimestamp

`
})