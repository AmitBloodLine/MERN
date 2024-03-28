const { Schema, model } = require('../connection');

const mySchema = new Schema({
    uploadedBy: { type: String, require: true },
    title: { type: String, require: true },
    image: String,
    uploadDate: Date,
    likes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 }
});

module.exports = model( 'socialpost', mySchema );