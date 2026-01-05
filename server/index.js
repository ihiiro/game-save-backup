

const express = require('express')
const body_parser = require('body-parser')
const fs = require('node:fs')
const PORT = 4000
const app = express()

app.use(body_parser.json())

app.get('/get-slots', (req, res) => {
    console.log('received request')
    fs.readFile('./slots.json', (err, data) => {
        if (err)
            res.sendStatus(500)
        else
            res.send(data)
    })
})

app.post('/post-slots', (req, res) => {
    let slots = req.body
    let slots2 = slots
    let x = 0
    // remove the slots whose deleted property is true
    for ( slot in slots ) {
        if ( slots[slot].deleted )
            delete slots[slot]
    }

    // console.log(`slots: ${slots2['0']}`)

    fs.writeFile('./slots.json', JSON.stringify(slots), err => {
        if (err)
            res.status(500)
        else
            res.status(201)
    })
})

app.listen(PORT, () => {
    console.log(`Helios server listening on ${PORT}`)
})
