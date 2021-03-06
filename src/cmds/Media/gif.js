let got = require('got')
let apiGiphy = process.env.API_GIPHY

module.exports = {
  name: ['gif'],
  desc: 'Displays a gif for the given tags. Picks a random one if no tags given.',
  permission: '',
  usage: '(search tags)',
  args: 0,
  command: async function (msg, cmd, args) {
    let url = `http://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(msg.content.slice(cmd.length + 1).trim())}`
    let body = (await got(url, {
      json: true,
      query: {
        api_key: apiGiphy,
        rating: 'r',
        format: 'json',
        limit: 1
      }
    })).body
    if (!body.data.image_url) {
      msg.channel.send('Nothing found!')
      return
    }
    msg.channel.send({ embed: { image: { url: body.data.image_url } } })
  }
}
