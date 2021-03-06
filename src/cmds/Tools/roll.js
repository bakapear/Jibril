module.exports = {
  name: ['roll'],
  desc: 'Rolls a random number.',
  permission: '',
  usage: '(min) (max)',
  args: 0,
  command: async function (msg, cmd, args) {
    let max = 6
    let min = 1
    if (args.length === 1) max = parseInt(args[0]) || 6
    else if (args.length > 1) {
      min = parseInt(args[1]) || 1
      max = parseInt(args[0]) || 6
    }
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min
    msg.channel.send(`:game_die: ${msg.author.username} rolled a **${rnd}**!`)
  }
}
