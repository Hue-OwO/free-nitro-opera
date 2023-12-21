const express = require("express");
const app = express();
const axios = require("axios");

const port = 6969;
app.listen(port, () => {
  console.log(`Port: ${port}`);
});

const operaNitroUrl = "https://api.discord.gx.games/v1/direct-fulfillment";
const discordUrl = "https://discord.com/billing/partner-promotions/1180231712274387115";

const postData = {
    partnerUserId: (Math.random() + 1).toString(36).substring(24)
}
const postHeaders = {
    'Content-Type': 'application/json'
}
let operaUrl = function() {
return axios.post(operaNitroUrl, postData, {headers: {postHeaders}})
            .then(res => {return res});
}
app.get("/", (req, res) => {
  if(res.status = 200) {
    let opera = operaUrl();
      opera.then(function(r) {
        res.redirect(`${discordUrl}/${r.data.token}`)
      })
  }
});
