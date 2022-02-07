module.exports = ({
    name: 'kkanal',
    code: `
  $color[GREEN]
  $title[Başarılı]
$description[Artık Sadece $channelName[$mentionedChannels[1]] Kanalında Kullanılabilecek :emoji_7: !]
$setServerVar[kkanal;$mentionedChannels[1]]
$onlyIf[$message!=;{description:Bir Kanal Etiketlemelisin !}{color:RED}{title:HATA}]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
`
})