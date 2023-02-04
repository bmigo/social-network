const { Schema, model } = require('mongoose');
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        thoughts: [thoughtSchema],
        friends: [userSchema]
    }
);

const User = model('user', userSchema);
module.exports = User;