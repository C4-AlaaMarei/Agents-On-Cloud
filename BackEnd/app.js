const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 5000;

const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");
const bookRouter = require("./routes/book");

const discussRoomRouter = require("./routes/discussRoom");

const followingRoomRouter = require("./routes/followingRoom");
const readingListRouter = require("./routes/readingList");


app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/book", bookRouter);

app.use("/discussRoom", discussRoomRouter);

app.use("/followingRoom", followingRoomRouter);
app.use("/readingList", readingListRouter);


app.listen(PORT, () => {
  console.log(`Book Club App at http://localhost:${PORT}`);
});
