import mongoose from "mongoose";
import { email, lowercase } from "zod";
import { maxLength, required, trim } from "zod/mini";


const HireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxLength: 200,
    },

    phone: {
        type: String,
        trim: true,
        maxLength: 20,
        required: true,
    },

    plan: {
        type: String,
        required: true,
        enum: ["full-time", "contract"],
    },

    projectType: {
        type: String,
        trim: true,
        maxLength: 200,
        required: true,
    },

    projectDescription: {
        type: String,
        trim: true,
        maxLength: 5000,
        required: true,
    },

    budget: {
        type: String,
        trim: true,
        maxLength: 100,
    },

    status: {
        type: String,
        enum: ["new", "reviewing", "accepted", "declined", "closed"],
    },
}, {timestamps: true});

const Hire = mongoose.model("Hire", HireSchema);

export default Hire;