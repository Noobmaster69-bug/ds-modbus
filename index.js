const debug = require("./src/utils/debug")("app");
const app = require("express")();
(function () {
  require("./src/config/index")();
  require("./src/middleware/middleware.js")(app);
  require("./src/routes/index.js")(app);
  app.get("/serialport", async (req, res) => {
    const { SerialPort } = require("serialport");

    return res.send(await SerialPort.list());
  });
  app.use("/status", (req, res) => {
    return res.sendStatus(200);
  });
  app.use("/*", (req, res) => res.sendStatus(500));
  app.listen(process.env.PORT || 33336, () => {
    debug(`ds-modbus is running on ${process.env.PORT || 33334}`);
  });
})();
