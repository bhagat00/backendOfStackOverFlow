// user db scheama
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, requires: true },
  email: { type: String, requires: true },
  password: { type: String, requires: true },
  about: { type: String },
  tags: { type: [String] },
  joinedOn: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
