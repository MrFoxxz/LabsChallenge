const express = require("express");
const app = express();
const morgan = require("morgan");
const fetch = require("node-fetch")

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require("./routes/index.js"))

//Starting server
app.listen( 3001, () => {
    console.log(`Servidor corriendo en  ${3001}`);
});