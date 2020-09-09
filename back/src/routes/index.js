const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch")

router.get("/", (req, res) => {
    res.json({"title":"hello word"})
})

router.get('/search', async (req, res) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query}`
    const response = await fetch(url);
    const json = await response.json();
    res.json(json)
});

module.export = router;
