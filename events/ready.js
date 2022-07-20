const config = require('../config.json');


module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
    // Login message
  console.log(`Connectés à ${bot.user.username}`)
  console.log(`Le bot est utilisé sur ${bot.guilds.cache.size} serveurs !`)

  //Presence
  bot.user.setPresence({ activities: [{ name: "En cours de développement", type: 'WATCHING' }] })
    }
}