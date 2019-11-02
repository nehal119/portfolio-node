const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
