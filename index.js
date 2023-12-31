require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

const{postsRouter} = require("./router");
app.use('/post', postsRouter);

const { userRouter } = require("./router");
app.use("/user", userRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});