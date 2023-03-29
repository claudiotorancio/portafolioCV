
//api/success

const path = require('path');

function success(req, res) {
  res.sendFile(path.join(__dirname, '..','public', 'success.html'));
}

module.exports = {success}


/*const router = require('../api/enrutador.js');
const path = require('path');


router.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '..','public','success.html'));
})

 module.exports = router*/




/*const express = require('express')
const app = express();
const path = require('path')
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','success.html'));
})

module.exports = app*/

