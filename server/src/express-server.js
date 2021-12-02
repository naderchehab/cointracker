import express from "express";
import axios from "axios";

const startExpressServer = (port) => {
  const app = express();
  app.use(express.static('build'));
  
  app.get("/data", async (req, res) => {
    try {
      
      const data = await axios({
        method: 'GET',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH',
        headers: {
          "X-CMC_PRO_API_KEY": require("../../keys.json").coinmarketcap_key
        }
      });
      res.json({ msg: data.data });
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
