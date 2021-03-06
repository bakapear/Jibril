module.exports = {
  name: ['fetch'],
  desc: 'Gets messages around message by ID.',
  permission: '',
  usage: '<message id> <1-10>',
  args: 2,
  command: async function (msg, cmd, args) {
    if (isNaN(args[1]) || parseInt(args[1]) < 1 || parseInt(args[1]) > 10) {
      msg.channel.send('Invalid limit')
      return
    }
    msg.channel.fetchMessages({ around: args[0], limit: args[1] }).then(msgs => {
      msgs.forEach((message) => {
        msg.channel.send(`<@${message.author.id}>` + ': ' + message.content)
      })
    }).catch(e => {
      msg.channel.send('Invalid message ID!')
    })
  }
}
