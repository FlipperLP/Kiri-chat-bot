module.exports.run = async (client, message, args, DB, config) => {
  if (!config.env.get('isTeam')) return message.react('❌');
  if (config.trollusers.includes(message.author.id)) {
    client.functions.get('insult_gen').run(message)
      .catch(console.log);
    return;
  }
  config.trollusers.forEach((user) => {
    // TODO: Check if user is on server
    // assign roles
    // save previos roles in DB
    let member = message.guild.members.get(user);
    member.removeRoles(member.roles);
    member.addRole(config.mutedRole);
    message.channel.send('semperfidragon7 is now in the void!');
  });
};

module.exports.help = {
  name: 'tothevoid',
};
