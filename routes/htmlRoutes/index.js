const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(__dirname)
    // the html and JS is all in the one file, since we will delete this file structure evventually.
    res.sendFile(path.join(__dirname, '../../views/index-geolocator-demo.html'));
  });

module.exports = router;