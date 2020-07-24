const express = require('express')
//import body parser
const bodyParser = require("body-parser");

// //data
// const users = require('./data/users');

// //import routes
// const usersRoutes = require('./routes/users');

// //users counter
// const usersCount = users.length;

const app = express()
const port = process.env.PORT || 4002

// //middleware for static assets
// app.use(express.static('public'));
 
//init body parser
app.use(bodyParser.json());

// //routes
// app.use(usersRoutes);

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})

