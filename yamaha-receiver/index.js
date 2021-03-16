const express = require("express")
const fs = require('fs')

const port = 8090;

console.log('Initializing webservice.')
const webservice = express()

/**
 * Get (initial) yamahaip config and passed via run.sh
 **/
var YAMAHA_IP = process.env.YAMAHA_IP
if (YAMAHA_IP == undefined) {
    console.log("You must set a yamahaip in the addon config")
    //process.exit(22)
}

webservice.get('/yamaha', async (req, res) => {
    console.log("GET /yamaha",req.body)
    res.json({err:'test'})
})


webservice.post('/yamaha', express.json(), async (req, res) => {
    console.log("POST /yamaha",req.body)
})

/**
 * Listen to defined port. Might be exposed differently depending on addon config.
 **/
console.log(`Starting listener on port ${port}.`)
webservice.listen(port, () => {
    console.log(`Ring Bridge is running on port ${port}.`);
})
