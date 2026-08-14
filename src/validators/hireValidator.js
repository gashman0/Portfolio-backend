import { z } from "zod";

const hireSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must contain atleast 2 characters")
        .max(100, "Name cannot exceed 100 characters"),

    email: z
        .email("Enter a valid email")
        .trim()
        .max(200),

    phone: z
        .string()
        .trim()
        .max(30, "Phone number is too long")
        .optional(),

    plan: z
        .enum(["full-time", "contract"]),

    projectType: z
        .string()
        .trim()
        .min(10, "Provide atleast 10 characters about your request")
        .optional(),

    projectDescription: z
        .string()
        .trim()
        .min(10, "Provide atleast 10 characters about your request")
        .max(5000, "Description must not exceed 500 characters"),

    budget: z 
        .string()
        .trim()
        .max(100, "Budget cannot exceed 100 characters")
        .optional(),
});

export default hireSchema;