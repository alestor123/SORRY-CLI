#!/usr/bin/env node

var axios = require('axios');

(async () => {
var res = await axios.get('https://apologygenerator.com/assets/apology.json')
console.log(res.data.introduction[random(res.data.introduction)] + res.data.sadness[random(res.data.sadness)] + res.data.explanation[random(res.data.explanation)] + res.data.conclusion[random(res.data.conclusion)])  
})();
var random = op =>  Math.floor(Math.random()*op.length);
