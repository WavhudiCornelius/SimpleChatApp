const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    surname: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true,
    },
    pnumber: {
        // you might change the type here...
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
}, {
    timestamps: true,
});

const user = mongoose.model('user', userSchema);

module.exports = user;