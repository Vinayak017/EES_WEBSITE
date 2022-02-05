const express = require('express');
const path = require('path');
const req = require('express/lib/request');
require("./db/conn");
const User = require('./models/usermessage');
const hbs = require('hbs');
// const { registerPartials } = require('hbs');


const app = express();

const port = process.env.PORT || 4000;

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

// console.log(path.join(__dirname, "../public"));

app.use('/css',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname, "../node_modules/jquery/dist")));


app.use(express.urlencoded({extended: false}));
app.use(express.static(staticpath));

app.set('view engine', 'hbs');	
app.set("views", templatepath);

// res.render("views/index",{...});
hbs.registerPartials(partialpath);


app.get("/index",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/teams-id",(req,res)=>{
    res.render("teams-id");
})

app.post("/contact",async(req,res)=>{
    try {
        res.send(req.body);
    } catch (error) {
        res.status(500).send(error);
    }
})
// app.get("/",(req,res)=>{
//     res.render("index");
// })


app.listen(port, () => {
    console.log(`server is running at ${port}`);
}
)