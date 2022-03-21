import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    detail: { type: String },
    date: { type: Date }
}, { timestamps: true });

export const Todo = mongoose.model("Todo", TodoSchema);




