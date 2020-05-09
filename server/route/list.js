const express = require('express')
const router = express.Router()
const ColFood = require('./db')
router.get('/list', (req, res) => {
  ColFood.find()
    .then(ok => {
      res.send({
        msg: '请求成功',
        data: ok,
        state: 1
      })
    })
    .catch(err=>{
      res.send({
        msg:'请求失败',
        state:4
      })
    })

})

module.exports = router