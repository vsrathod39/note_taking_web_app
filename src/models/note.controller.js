const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    heading: {type: String},
    content: {type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("note", noteSchema);