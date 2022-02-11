const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    tanggallahir: {
        type: String,
        required: true
    },
    jeniskelamin: String,
    hobi: String,
    created_date: {
        type: Date,
        default: Date.now
    }
})

const ModelSchema = module.exports = mongoose.model('database', schema);
module.exports.get = function (callback, limit) {
    ModelSchema.find(callback).limit(limit);
}