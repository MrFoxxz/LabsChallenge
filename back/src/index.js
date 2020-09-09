const express = require("express");
const app = express();
const morgan = require("morgan");

//Setttings
app.set("port", process.env.PORT || 3001);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.get("/", (req,res) => {
    res.send("Hello Word");
});

//Starting server
app.listen(3001 , () => {
    console.log(`Servidor corriendo en  ${app.get("port")}`)
})