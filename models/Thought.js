const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema (
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: [reactionSchema],
    }
);

const Thought = model ('thought', thoughtSchema);
module.exports = Thought;