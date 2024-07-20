import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  votes: [{
    option: { type: String },
    votedBy: { type: Schema.Types.ObjectId, ref: 'User'}
  }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

export default mongoose.model('Poll', PollSchema);
