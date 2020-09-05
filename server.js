var express = require('express');
const path = require('path');
var exphbs = require('express-handlebars');
var router = require('./router/router');






const port = process.env.PORT || 3000;
var app = express();

app.use(router);
app.use(express.static(path.join(__dirname,"public")));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');





app.listen(port, (err) => {

    if (err) {
        console.log("Erro: ", err.message);
    } else {
        console.log(`http://localhost:${port}`);
    }
});