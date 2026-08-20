// import { success } from "zod";
import Contact from "../models/Contact.js";
import contactSchema from "../validators/contactValidator.js";
import { sendContactEmail, sendContactNotification } from "../services/mails/contactMail.js";

const createContact = async (req, res, next) => {
    try {
        const result = contactSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                success: false,
                message: "Please correct the submitted information",
                error: result.error.flatten().fieldErrors,
            });
        }

        const contact = await Contact.create(result.data);

        await sendContactEmail({
            name: result.data.name,
            email: result.data.email,
            subject: result.data.subject,
            message: result.data.message,
        })
        await sendContactNotification({
            name: result.data.name,
            email: result.data.email,
        })

        return res.status(201).json({
            success: true,
            message: "Your message has been received",
            contactId: contact._id,
        });

    } catch (error) {
        next(error);
    }
};

export default createContact;