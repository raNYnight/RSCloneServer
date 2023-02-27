const exp = require("constants");
const express = require("express");
const userRouter = require("./routes/user_routes");
const testRouter = require("./routes/test_routes");
const PORT = process.env.PORT || 3000;

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use("/", userRouter);
app.use("/", testRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
