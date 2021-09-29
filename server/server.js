const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const checklistController = require('../Components/checklistController');
//const db = require('./Model/model')
app.use(express.json()); //handle parsing request body
app.use(express.urlencoded({ extended: false })); //handle parsing url

//idenitfy which environment app is currently running on
// if (process.env.NODE_ENV === 'production') {
//   app.use('/build', express.static(path.resolve(__dirname, '../build')));
//   app.get('/', (req, res) => {
//     return res.sendFile(path.resolve(__dirname, '../client/index.html'));
//   });
// }

app.get('/', (req, res) => {
  console.log('In app.get serving html file');
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/checklist', checklistController.getChecklist, (req, res) => {
  console.log('In server.js app.get');
  return res.status(200).send(res.locals.allChecklists);
});

//Route error handler
app.use((req, res) => {
  return res.status(404).send('404 error');
  //should we add a setHeader and sendFile for 404.html
});

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error ocurred in middleware' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on on port: ${PORT}`));
