import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
    username: string, 
    email: string,
    verifyCode: string,
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Secret Sender | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),

        })
        return {success : true, message : "Verification email sent"}
    }
    catch (emailError) {
        console.error("Error sending email", emailError)
        return {success : false, message : "Error sending email"}
    }
}