const { Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {

        },
        reactionBody: {

        },
        username: {

        },
        createdAt: {

        }
    }
);

const Reaction = model ('reaction', reactionSchema);
module.exports = Reaction;