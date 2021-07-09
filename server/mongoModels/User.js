const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    name: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    words: {type: Types.ObjectId, ref: "Word"}
})


module.exports = model("User", schema);