module.exports = ({
    name: 'kayıt',
    aliases: ["k"],
    code: `
  $color[GREEN]
  $title[Başarılı Kayıt]
  $description[
  
  Üye : <@$mentioned[1]>

  Yeni İsim : \`$getServerVar[ktag] $message[2] $message[3]\`
  
  Verilen Rol : <@&$getServerVar[vrol]>
  
  Yetkili : <@$authorID>
  
  ]
  $takeRoles[$mentioned[1];$getServerVar[arol]]
  $giveRoles[$mentioned[1];$getServerVar[vrol]]
$changeNickname[$mentioned[1]; $getServerVar[ktag] $message[2] $message[3]]
$onlyIf[$message[2]!=;{description:Kullanım: **$getServerVar[prefix]kayıt @kişi İsim Yaş**}{title:HATA}{color:RED}]
  $onlyForChannels[$getServerVar[kkanal];{description:Üzgünüm Burası Kayıt Kanalı Değil ! Burada Açman Lazım <#$getServerVar[kkanal]>}{color:RED}{title:HATA}]
  $onlyIf[$getServerVar[kayıt]!=kapalı;{description:Alınacak Rol Ve Verilecek Rol Ayarlanmamış !}{title:HATA}{color:RED}]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kgörevli]]!=false;{description:Üzgünüm Bunu Sadece <@&$getServerVar[kgörevli]> Rolüne Kişileri Kullanabilir !}{title:HATA}{color:RED}]
  $footer[Laixa Kayıt Sistemi]
  $addTimestamp
`
})