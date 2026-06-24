require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/homie-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/homie-welcome", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: `Hello and welcome to our modest channel!\nI hope you enjoy your time with us!` });
});

app.command("/homie-roll", async ({ command, ack, respond }) => {
  await ack();
  a = Math.floor(Math.random() * 6) + 1;
  await respond({ text: `Your dice roll result is: ${a}` })
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();