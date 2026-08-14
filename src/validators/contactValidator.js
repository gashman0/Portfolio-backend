import { email, z } from "zod";

const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must contain atleast two characters")
        .max(100, "Name cannot exceed 100 characters"),

    email: z
        .email("Add a valid email")
        .trim().max(200, "Email address is too long"),

    subject: z
        .string()
        .trim()
        .max(150, "Subject cannot exceed 150 characters")
        .optional(),

    message: z
        .string()
        .trim()
        .min(10, "Message contain atleast 10 characters")
        .max(5000, "Message cannot exceed 5000 characters"),
});

export default contactSchema;