var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

// PORT declaration 
const PORT = process.env.PORT || 8080;

// Setting ejs, body-parser and methodOverride
app.set("view engine", "ejs");
app.use(bodyParser.json()); 
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


//root route[GET route]
app.get("/", (req, res) => {
    var inputs = {
        input1 : req.query.input1,
        input2 : req.query.input2,
        input3 : req.query.input3
    }
    res.render("index", {inputs : inputs});
});

//port
app.listen(PORT, () => {
    console.log(`The Server Started at Port ${PORT}`);
});