"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = formData;

  try {
    const { data, error } = await resend.emails.send({
      from: "Nurulla Hasan Portfolio <onboarding@resend.dev>",
      to: ["nurullahasan.dev@gmail.com"],
      subject: `📩 Message from ${name} via Portfolio`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #00c964;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888;">This message was sent from your portfolio website.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Email Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Server Action Error:", err);
    return { success: false, error: err.message };
  }
}
