const express = require('express')
const router = express.Router()
const ColFood = require('./cartdb')
router.get('/userlist', (req, res) => {
  ColFood.find()
    .then(ok => {
      res.send({
        msg: '成功',
        state: 2,
        data: ok
      })
    })
})
router.get('/cart', (req, res) => {
  const id = req.query.id
  const price = req.query.price
  const title = req.query.title
  const imgpath = req.query.imgpath
  // 创建一个document
  const userDemo = ColFood({
    id,
    num: 1,
    price,
    title,
    imgpath
  })
  ColFood.find({
    id
  }).then(ok => {
    if (ok.length > 0) {
      let num = ok[0].num
      num = num * 1 + 1
      console.log(num)
      // ColFood.update(
      //   { id },  //指定要更改的数据
      //   { $set: { num} }, //修改器操作符$set
      //   { upset: false },
      //   { multi: false }
      //   // upset默认false，query的文档不存在则无法修改,如果设置为true表示query的文档不存在则根据query和update参数插入新的文档
      //   //multi默认false 如果有多条符合筛选条件的文档，则只修改第一条，如果设置为true则修改所有符合条件的文档
      // ).then(ok=>{
      res.send({
        msg: '添加成功',
        state: 2
      })
      // })
    } else {
      userDemo.save()
        .then(ok => {
          res.send({
            msg: '加入购物车成功',
            data: ok,
            state: 1
          })

        })
        .catch(err => {
          res.send({
            msg: '请求失败',
            state: 4
          })
        })

    }
  })
})
// 存储

module.exports = router