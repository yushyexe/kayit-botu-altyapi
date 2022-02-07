module.exports = ({
    name: 'vrol',
    code: `
  $color[GREEN]
  $setServerVar[kayıt;aktif]
  $title[Başarılı]
  $description[
  Verilicek Rol \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !]
  $setServerVar[vrol;$mentionedRoles[1]]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $onlyIf[$message!=;{description:Verilicek Rolü Ayarlamam İçin Rol Etiketlemelisin !}{title:HATA}{color:RED}]
 `
})