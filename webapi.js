const express = require('express')
const akiCanvas = require("./akiCanvas");
const app = express()

app.get('/api/5000choyen', (req, res) => {
    let query = req.query;
    console.log(query);
    let _canvas = new akiCanvas(1500, 280);
    _canvas.redrawTop(query.top);
    _canvas.redrawBottom(0,query.bottom);
    res.send(_canvas.getB64());
})

const server = app.listen(3000, () => console.log('server on'));