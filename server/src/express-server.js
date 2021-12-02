import express from "express";

const startExpressServer = (port) => {
  const app = express();
  app.use(express.static('build'));
  
  app.get("/data", async (req, res) => {
    try {
      res.json({ msg: "hi" });
    } catch (err) {
      console.err(err);
      res.json(err);
    }
  });

  app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
  });
};

export { startExpressServer };
