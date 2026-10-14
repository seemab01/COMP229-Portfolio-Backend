import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: "Name is required" },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email is required",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: { type: String, required: "Password is required", minlength: 6 },
  created: { type: Date, default: Date.now },
  updated: { type: Date },
});

// hash the password before saving
UserSchema.pre("save", async function () {
  this.updated = Date.now();
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

UserSchema.methods.authenticate = function (plainText) {
  return bcrypt.compare(plainText, this.password);
};

export default mongoose.model("User", UserSchema);
