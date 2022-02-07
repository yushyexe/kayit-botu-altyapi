module.exports = ({
    name: 'arol',
    code: `
  $color[GREEN]
  $setServerVar[kayıt;aktif]
  $title[Başarılı]
  $description[
  Alınacak Rol \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !]
  $setServerVar[arol;$mentionedRoles[1]]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $onlyIf[$message!=;{description:Verilicek Rolü Ayarlamam İçin Rol Etiketlemelisin !}{title:HATA}{color:RED}]
 `
})