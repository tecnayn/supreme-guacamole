const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
 
          let user = message.mentions.users.first() || message.author
          
  var cüzdan = db.fetch(`para_${user.id}`)
  var banka = db.fetch(`bankapara_${user.id}`)   

  var toplam= cüzdan+banka
message.channel.send(new Discord.MessageEmbed()
                  .setColor("YELLOW")
                  .setAuthor(user.tag, user.avatarURL({dynamic: true}))     
                  .addField("Cüzdan",`${cüzdan ? cüzdan + ' :coin:' : "0 :coin:"}`,true)
                  .addField("Banka",`${banka ? banka + ' :coin:' : "0 :coin:"}`,true)
                  .addField("Toplam",`${toplam ? toplam + ' :coin:' : "0 :coin:"}`,true))
  }


exports.conf = {
  enabled: true,
  aliases: ["money"],
};

exports.help = {
  name: 'para',
};