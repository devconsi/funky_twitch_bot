
import tmiJs from "tmi.js";
import config from "./config/config.json"

setupTmiClient();



/////////////////////////// Listen to Twitch Chat ///////////////////////////

function setupTmiClient() { // Setup TMI to listen to Twitch Chat
    const client = new tmiJs.Client({ // Setup TMI Client with the channel(s) you want to listen to
        channels: [ config.CHANNEL ]
    });
  
    client.connect(); // Connect to the channel
  
    client.on("message", (channel, tags, message, self) => { // Run each time a comment comes in
      let name = tags["display-name"]; // Commenter's Name

  	    console.log(`Recieved a message from: ${tags['display-name']}: ${message}`);

      if (message === "!deeznuts") {
        //blastMessage(CHAT_COMMAND, {'username': name, 'command': 'lurk'});
        console.log("Recieved a deeznuts command")
      }
    });
  }
