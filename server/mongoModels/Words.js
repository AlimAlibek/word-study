const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    words: {type: Object, require: true},
    owner: {type: Types.ObjectId, ref: "User"}
})

module.exports = model("Words", schema);