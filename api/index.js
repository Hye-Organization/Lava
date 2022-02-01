const express = require('express')
const expressws = require('express-ws')
const router = express.Router()
const multer = require('multer')
expressws(router)

// get instance
router.get('/instances/:instance', require('./instance/get'))
// get bridge forwards
router.get('/network/:bridge/forwards', require('./network/forwards/get'))
router.put("/network/:bridge/forwards/ports", require("./network/forwards/ports/put"));
// get network bridge
router.get('/network/:bridge', require('./network/get'))
router.post("/network/:bridge/remotes", require("./network/remotes/post"));
// create instance
router.post('/instances', require('./instance/post'))
router.post("/network", require("./network/post"))
// attach to instance console
router.ws('/instances/:instance/console', require('./instance/console/ws'))
// monitor instance resources
router.ws('/instances/:instance/monitor', require("./instance/monitor/ws"))
// delete instance
router.delete("/instances/:instance", require("./instance/delete"))
router.get('/instances/:instance/monitor', require("./instance/monitor/get"))
router.post('/instances/:instance/state', require('./instance/state/post'))
router.get('/instances/:instance/state', require('./instance/state/get'))
router.ws('/instances/:instance/control', require('./instance/control/ws'))
router.get('/instances/:instance/console', require('./instance/console/get'))
router.ws('/instances/:instance/console/vga', require('./instance/console/vga/ws'))
router.get('/instances/:instance/files', require('./instance/files/get'))
router.get('/instances/:instance/files/type', require('./instance/files/type/get'))
router.post('/instances/:instance/files', require('./instance/files/post'))
router.post("/instances/:instance/backups", require("./instance/backups/post"))
router.get("/instances/:instance/backups/:backup", require("./instance/backups/get"))
router.delete("/instances/:instance/backups/:backup", require("./instance/backups/delete"));
module.exports = router