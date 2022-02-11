const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/api', (req, res) => {
    res.json({
        status: 'success',
        message: 'Welcome to Indra APIs!'
    })
})

router.route('/api/humans')
    .get(controller.index)
    .post(controller.new)

router.route('/api/humans/:data_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete)

module.exports = router;