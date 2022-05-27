const { Router } = require("express");
const fetch = require("node-fetch-commonjs");
const Customer = require("../models/Customers");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const btoa = (text) => {
      return Buffer.from(text, 'binary').toString('base64');
    };
    const ip = req.ip;
    const payload = req.body.payload;
    const authCheckUrl = "https://rest.clicksend.com/v3/sms/send";
    const username = "raycai@hotmail.co.nz";
    const apiKey = "7E8D9225-6E36-40E0-50F2-3AD00F5017B8";
    const baseCode = btoa(`${username}:${apiKey}`);
    const mobilePin = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);
    const authOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${baseCode}`,
      },
      body: JSON.stringify({
        messages: [
          {
            to: `${payload}`,
            source: "Dupe.dex",
            body: `Hello. Please verify your phone number with PIN: ${mobilePin}`,
          },
        ],
      }),
    };
    await fetch(authCheckUrl, authOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.data.messages[0].status === "SUCCESS") {
          const customer = new Customer({
            ip: ip,
            phone: payload,
            pin: mobilePin,
          });
          customer.save();
          const data = result.data.messages[0];
          const status = `Sms sent to user's phone ${payload}`;
          res.status(200).json({ status, mobilePin, data });
        } else {
          const data = result.data.messages[0];
          res
            .status(400)
            .json({ message: "Please enter valid number : +64.....", data});
        }
        return result;
      });
  } catch (e) {
    res.status(500).json({ message: "Error from register" });
  }
});

module.exports = router
