const exp = require("constants");
const express = require("express");
const userRouter = require("./routes/user_routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/", userRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
