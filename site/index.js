
import tmiJs from "tmi.js";
import config from "./config/config.json"

const client = new tmi.Client({
	channels: [ config.CHANNEL ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});
