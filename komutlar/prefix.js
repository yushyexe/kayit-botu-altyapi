module.exports = {
  name: "prefix",
  aliases: [`setprefix`], 
  code: `Başarılı bir şekilde sunucunun prefixi **$message[1]** olarak ayarlandı!
$setServerVar[prefix;$message[1]]
$onlyPerms[admin;Üzgünüm Ama Bu Komutu Kullanmak İçin Yönetici Yetkisine Sahip Olmalısın!] `
}