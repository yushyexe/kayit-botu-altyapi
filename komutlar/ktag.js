module.exports = ({
    name: 'ktag',
    code: `
  $color[GREEN]
$title[Başarılı]
$description[Tamam Artık Biri Kayıt Olunca İsmine Ek Olarak **$message[1]** Tagını Eklicem]
$setServerVar[ktag;$message[1]]
$onlyIf[$message[1]!=;{description:Bir Tag Belirle !}{color:RED}{title:HATA}]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $footer[Laixa Kayıt Sistemi] $addTimestamp

`
})