import mongoose from "mongoose";
import { email, lowercase } from "zod";
import { maxLength, required } from "zod/mini";

const ContactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxLength: 200,
    },

    subject: {
        type: String,
        trim: true,
        maxLength: 150,
    },

    message: {
        type: String,
        required: true,
        trim: true,
        maxLength: 5000,
    },

    status: {
        type: String,
        enum: ["new", "read", "replied", "closed"],
        default: "new",
    },
},{timestamps: true});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;