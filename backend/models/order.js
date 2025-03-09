import mongoose from "mongoose";

const order = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  book: 
    {
      type: mongoose.Types.ObjectId,
      ref: "books",
    },
  status: {
    type: String,
    default: "order placed",
    enum: ["order placed","Out for delivery", "delivered","cancelled"],
  },
},
    {timestamps: true,}
);

export default mongoose.model("order", order);