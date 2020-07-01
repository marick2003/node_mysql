//import clippy from 'clippyjs'

// clippy.load('Merlin', (agent) => {
//     // do anything with the loaded agent
//     agent.show();
// });
var express = require('express');
var router = express.Router();
const { query } = require('../async-db');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = "";

async function getData() {
  let sql = 'SELECT * FROM category'
  let dataList = await query( sql );
  
  return dataList;
  //res.render('index', { title: 'Express', data: dataList});
}
  //console.log(await getData())
  (async () => {
    data=await getData();
    console.log(data);
    res.render('index', { title: 'Express', data: data});
  })()
  
});

module.exports = router;
