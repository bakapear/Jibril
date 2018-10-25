let google = require("google")

module.exports = {
    name: ["g", "google"],
    desc: "Google something!",
    permission: "",
    usage: "<query>",
    args: 1,
    command: async function (msg, cmd, args) {
        google(args.join(" "), function (error, body) {
            if (error) return
            let full = []
            for (let i = 0; i < body.links.length; i++) {
                if (body.links[i].title !== null && body.links[i].description !== null && body.links[i].href !== null) {
                    full.push(body.links[i])
                }
            }
            if (full.length < 1) {
                msg.channel.send("Nothing found!")
                return
            }
            let mod = msg.content.startsWith(".") ? Math.floor(Math.random() * full.length) : 0
            msg.channel.send({
                embed: {
                    color: 1231312,
                    title: full[mod].title,
                    url: full[mod].href,
                    description: full[mod].description,
                }
            })
        })
    }
}