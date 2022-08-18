const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["To Learn", "Learning", "Learned"],
  },
  url: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("post", postSchema);
