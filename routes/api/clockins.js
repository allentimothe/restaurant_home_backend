const express = require('express');
const router = express.Router();
const clockinsCtrl = require('../../controllers/clockins');

router.get('/', clockinsCtrl.index);
router.post('/', clockinsCtrl.create);
router.delete('/:id', clockinsCtrl.delete);
router.put('/:id', clockinsCtrl.update);

module.exports = router;