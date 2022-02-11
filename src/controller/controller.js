const ModelSchema = require('../model/model');

exports.index = function (req, res) {
    ModelSchema.get(function (err, data) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            })
        }

        res.json({
            status: 'success',
            message: 'Human Data retrieved successfully',
            data: data
        })
    })
}

exports.new = function (req, res) {
    let data = new ModelSchema();
    data.nama = req.body.nama;
    data.tanggallahir = req.body.tanggallahir;
    data.jeniskelamin = req.body.jeniskelamin;
    data.hobi = req.body.hobi;

    data.save()
        .then((data) => {
            res.json({
                status: 'success',
                message: 'New Human Data has been added',
                data: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Internal server error'
            })
        })
}

exports.view = function (req, res) {
    ModelSchema.findById(req.params.data_id, function (err, data) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            })
        }

        res.json({
            message: 'success',
            data: data
        })
    })
}

exports.update = function (req, res) {
    ModelSchema.findById(req.params.data_id, function (err, data) {
        if (err) {
            res.json({
                status: 'error',
                message: 'Human ID not Found'
            })
        }

        data.nama = req.body.nama;
        data.tanggallahir = req.body.tanggallahir;
        data.jeniskelamin = req.body.jeniskelamin;
        data.hobi = req.body.hobi;

        data.save()
            .then((data) => {
                res.json({
                    status: 'success',
                    message: 'Human Data Updated!',
                    data: data
                })
            })
            .catch((error) => {
                res.status(500).send({
                    message: error.message || 'Internal server error'
                })
            })
    })
}

exports.delete = function (req, res) {
    ModelSchema.remove({

        _id: req.params.data_id

    }, function (err, data) {
        if (err) {
            res.send(err)
        }

        res.json({
            status: 'success',
            message: 'Human data been deleted!'
        })
    })
}