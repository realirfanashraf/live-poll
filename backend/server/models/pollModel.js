import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  votes: [{
    option: { type: String, required: true },
    votedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

module.exports = mongoose.model('Poll', PollSchema);
