const express = require("express");
const app = express();
const morgan = require("morgan");
const fetch = require("node-fetch")
const cors = require ("cors")

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

//Routes
app.use(require("./routes/index.js"))

//Starting server
app.listen( 3001, () => {
    console.log(`Servidor corriendo en  ${3001}`);
});