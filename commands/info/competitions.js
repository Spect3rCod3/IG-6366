module.exports = {
    name: "competitions",
    description: "Gives info about the competitions",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Myrtle beach competition from Feb 25-29. Knoxville competition is March 26-30.`);
    }
}
