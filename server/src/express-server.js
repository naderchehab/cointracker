import express from "express";
import axios from "axios";
import { getCoinList, getSubtotal } from './utils'

const coins = require("../../config/coins.json").coins
const coinString = coins.map(coin => coin.coin).join(",")
const USE_MOCK = false
const IS_SHOW_WALLET = false

const startExpressServer = (port) => {
  const app = express();
  app.use(express.static('build'));

  app.get("/data", async (req, res) => {
    try {
      let data = require("../../mock.json")
      if (!USE_MOCK) {
        const response = await axios({
          method: 'GET',
          url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coinString}`,
          headers: {
            "X-CMC_PRO_API_KEY": require("../../config/keys.json").coinmarketcap_key
          }
        });
        data = response.data;
      }
      const coinList = getCoinList(coins, data, IS_SHOW_WALLET)
      coinList.sort((a, b) => b.total - a.total)
      const subtotal = getSubtotal(coinList)
      const resp = { coinList, subtotal, isShowWallet: IS_SHOW_WALLET, data }
      res.json(resp);
    } catch (err) {
      console.error(err);
      res.json(err);
    }
  });

  app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
  });
};

export { startExpressServer };
