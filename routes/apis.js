const router = require('koa-router')()
const Data = require('../models/dataSchema')

router.prefix('/api')

router.get('/', async (ctx, next) => {
  ctx.body = 'api server is works'
})

router.get('/all', async (ctx, next) => {
  try {
    let dataFinder = await Data.find({})
    ctx.body = {
      'error' : false,
      'data' : dataFinder
    }
  } catch (e) {
    console.log(e)
    ctx.body = {
      'error' : true,
      'data' : e
    }
  }

})

router.get('/:dataId', async (ctx, next) => {
  let dataId = ctx.params.dataId
  try {
    let dataFinder = await Data.findOne({ '_id': dataId })
    ctx.body = {
      'error' : false,
      'data' : dataFinder
    }
  } catch (e) {
    console.log(e)
    ctx.body = {
      'error' : true,
      'data' : e
    }
  }

})

router.post('/create', async (ctx, next) => {
  let imageUrl = ctx.request.body.imageUrl
  let helpText = ctx.request.body.helpText
  let buttonText = ctx.request.body.buttonText
  let replyText = ctx.request.body.replyText

  let newData = {
    imageUrl,
    helpText,
    buttonText,
    replyText
  }

  try {
    let createData = await Data.create(newData)
    ctx.body = {
      'error' : false,
      'data' : createData
    }
  } catch (e) {
    console.log(e)
    ctx.body = {
      'error' : true,
      'data' : e
    }
  }




})

module.exports = router
