module.exports = ({
    name: 'kgörevli',
    code: `
  $color[GREEN]
$title[Başarılı]
$description[
 Kayıt Görevlisi Rolü \`\`\`$roleName[$mentionedRoles[1]]\`\`\` Olarak Ayarlandı :emoji_7: !]
  $suppressErrors[Etiketledigin Rolu Kontrol Et !]
  $setServerVar[kgörevli;$mentionedRoles[1]]
  $onlyIf[$message[1]!=;{description:Bir Rol Etiketle !}{color:RED}{title:HATA}]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
   `
})