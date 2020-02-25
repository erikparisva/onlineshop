const path = require('path');
const express = require('express');
const rootDirectory = require('../utilities/path');

const router = express.Router();

router.get('/admin/add-product', function(req, res){
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
})

module.exports = router;