const express = require("express");
const app = express();
const morgan = require("morgan");
const fetch = require("node-fetch")

//Setttings
app.set("port", process.env.PORT || 3001);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
    res.json({"title":"hello word"})
})

/* app.use(require("./routes/index.js")) */

//Starting server
app.listen(app.get("port") , () => {
    console.log(`Servidor corriendo en  ${app.get("port")}`);
});