import { success } from "zod";
import Hire from "../models/Hire.js";
import hireSchema from "../validators/hireValidator.js";

const createHire = async (req, res, next) => {
    try {
        const result = hireSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                success: false,
                message: "Please correct the submitted information",
                errors: result.error.flatten().fieldErrors,
            })
        }

        const hire = await Hire.create(result.data);

        return res.status(201).json({
            success: true,
            message: "Your hire request has been received, you will be contacted soon!",
            hireId: hire._id,
        })
    } catch (error) {
        next(error);
    }
};

export default createHire;