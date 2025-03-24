import mongoose from "mongoose";

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk",
  },
  role:{
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  favourites: [
    {
        type: mongoose.Types.ObjectId,
        ref: "books",
    },
  ],
  cart: [
    {
        type: mongoose.Types.ObjectId,
        ref: "books",
    },
  ],
  orders: [
    {
        type: mongoose.Types.ObjectId,
        ref: "order",
    },
  ],
},
    {timestamps: true,}
);

export default mongoose.model("user", user);