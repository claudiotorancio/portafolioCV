//api/enrutador

const router = require('express').Router();
const path = require('path')

const {users} = require('./users.js')
const {getbill} = require('./getbill.js')
const {success} = require('./success.js')
const {error} = require('./error.js')


router.post('/product/users', users)
router.post('/product/getbill',getbill)
router.get('/success', success)
router.get('/error', error)

 

module.exports = router

