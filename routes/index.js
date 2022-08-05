const express = require('express');
const router = express.Router();
const fs = require('fs')


//get data of file and assign const
const content = JSON.parse(fs.readFileSync('https://gitcdn.link/cdn/JBestbier/App-Controler/main/public/webApi.json'))


//get a list of apps
router.get('', function(req, res){
    res.send(content);
})


//create an item list of apps
router.post('', function(req, res){
    
    const id = content.length + 1;

    const newEntry = Object.assign({
        id
    }, req.body)

    content.push(newEntry)

    res.send('thank you')
})


//update a list item with specific id of apps
router.put('/:id', function(req, res){
    const id = Number(req.params.id)

    const newEntry = Object.assign({
        id
    }, req.body)

    for (let i = 0; i < content.length; i++) {
        if (content[i].id === id) {
            content[i] = newEntry
        }
    }

    res.send(content)

    res.send(`Updating ${id}`)
})


// delete a list item with specific id of apps
router.delete('/:id', function(req, res){
    const id = Number(req.params.id)

    for (let i = 0; i < content.length; i++) {
        if (content[i].id === id) {
            content.splice(i, 1)
        }
    }
    return res.json({
        message: "deleted an option",
        content
    })
})


//export router module
module.exports = router
