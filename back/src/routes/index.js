const { Router } = require('express');
const router = Router();
const fetch = require("node-fetch")

/* router.get('/', (req, res) => {
    res.json({ 'Title': 'Hello World' });
}); */

router.get('/api/search', async (req, res) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=10&offset=${req.query.offset}&sort=${req.query.sort}`
    const response = await fetch(url);
    const json = await response.json();
    res.json(json)
});

router.get('/api/search/condition', async (req, res) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=30&offset=${req.query.offset}&sort=${req.query.sort}&ITEM_CONDITION=${req.query.ITEM_CONDITION}`
    const response = await fetch(url);
    const json = await response.json();
    res.json(json)
});

router.get('/api/item/:id', async (req, res) => {
    id=req.params.id
    const url = `https://api.mercadolibre.com/items/${id}`
    const response = await fetch(url);
    const json = await response.json();
    res.json(json)
});

module.exports = router;