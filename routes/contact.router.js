const express = require('express');
const { whenPost, whenGetAll, whenGetOne, whenPut, whenDelete } = require('../controllers/contact.controller');
const router = express.Router()


router.get('/',whenGetAll)
router.get("/:id", whenGetOne );
router.post("/", whenPost);
router.put("/:id", whenPut);
router.delete("/:id", whenDelete);

module.exports = router