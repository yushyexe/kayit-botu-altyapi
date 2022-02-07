module.exports = ({
    name: 'kreset',
    code: `
  $color[GREEN]
  $title[Başarılı]
  $description[
  Kayıt Sistemi Resetlenmiştir !]
  $resetServerVar[arol]
  $resetServerVar[vrol]
  $resetServerVar[kayıt]
  $resetServerVar[kkanal]
  $resetServerVar[kgörevli]
  $resetServerVar[ktag]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]
  $footer[Kayıt Sistemini Tekrar Kurmak İçin $getServerVar[prefix]kyardım Yazın!]
  $addTimestamp
 `
})