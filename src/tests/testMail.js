import "dotenv/config";
import { testEmail } from "../services/mailService.js";

try {
    await testEmail();
    console.log("Test email successful!");
} catch (error) {
    console.error("Test email failed:", error);
}