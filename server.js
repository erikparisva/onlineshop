const express = require('express');
const bodyParser = require('body-parser');
const userRoutes =  require('./routes/shop');
const adminData = require('./routes/admin');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use('/admin',adminData.router);

app.use(function(req, res){
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000, function(){
    console.log("Server be runnin on port 3k")
    //console.log("path", path);
});