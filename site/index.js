import tmiJs from "tmi.js";
import config from "./config/config.json";

setupTmiClient();

/////////////////////////// Listen to Twitch Chat ///////////////////////////

function setupTmiClient() {
  // Setup TMI to listen to Twitch Chat
  const client = new tmiJs.Client({
    // Setup TMI Client with the channel(s) you want to listen to
    channels: [config.CHANNEL],
  });

  client.connect(); // Connect to the channel

  client.on("message", (channel, tags, message, self) => {
    // Run each time a comment comes in
    let name = tags["display-name"]; // Commenter's Name

    console.log(`Recieved a message from: ${tags["display-name"]}: ${message}`);

    if (message.startsWith("!")) {
      console.log("Recieved a command");
      const command = message.substring(1); //TODO define if only !deeznuts comands exact match
      if (!(command in messageCommandToProcessor)) {
        console.log(`unhandled message command ${command}`);
        return;
      }
      const processor = messageCommandToProcessor[command];
      processor(tags);
    }
  });
}

/////////////////////////// Process messages ///////////////////////////
const messageCommandToProcessor = {
  deeznuts: processDeezNutsJoke,
};

function processDeezNutsJoke(data) {
  console.log(data);
  //Reproduce random joke
  console.log("trying to reproduce random joke from local storage");
}
