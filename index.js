require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// const routes = require('./routes');
// app.use(routes);
// define routers

// const accountsRouter = require('../accounts')

// const router = require('express')(express.Router());

// router.use('/accounts', accountsRouter);

const {accountsRouter} = require('./router');
app.use('/accounts', accountsRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });