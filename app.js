require("dotenv").config();
const Express = require("express");
const db = require("./db");

const app = Express();
const controllers = require("./controllers");
app.use(Express.json());

app.use("/user", controllers.User);
app.use("/auction", controllers.Auction);
app.use("/bidding", controllers.Bidding);
app.use("/name", controllers.Name);

db.authenticate()
  .then(() => db.sync())
  .then(() =>
    app.listen(3000, () => {
      console.log(`[server]: App is listening on localhost:3000`);
    })
  )
  .catch((e) => {
    console.log("[server]: Server Crashed");
    console.log(e);
  });
