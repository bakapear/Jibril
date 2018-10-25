let got = require("got")

module.exports = {
    name: ["owo"],
    desc: `Displays a random owo gif.`,
    permission: "",
    usage: "",
    args: 0,
    command: async function (msg, cmd, args) {
        let url = "https://rra.ram.moe/i/r?type=" + cmd
        let body = (await got(url, { json: true })).body
        let img = "https://rra.ram.moe" + body.path
        msg.channel.send({ embed: { image: { url: img } } })
    }
}