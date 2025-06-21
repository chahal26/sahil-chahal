import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create transporter using Gmail SMTP - Fix: use createTransport instead of createTransporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email to yourself (notification)
    const notificationMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Auto-reply to the sender
    const autoReplyMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting Sahil Chahal",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" and I appreciate you taking the time to contact me.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              I'll review your message and get back to you as soon as possible, typically within 24-48 hours.
            </p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; margin: 25px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #374151; margin-top: 0; font-size: 18px;">Your Message:</h3>
              <p style="color: #4b5563; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              In the meantime, feel free to check out my latest projects on my portfolio or connect with me on LinkedIn.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.linkedin.com/in/sahil-chahal-2729b7217/" 
                 style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Connect on LinkedIn
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; color: #6b7280; font-size: 14px;">
              <p style="margin: 0;"><strong>Sahil Chahal</strong></p>
              <p style="margin: 5px 0 0 0;">Senior Full Stack Developer</p>
              <p style="margin: 5px 0 0 0;">📧 dev.sahilchahal@gmail.com | 📱 +91 73474 55775</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(notificationMailOptions), transporter.sendMail(autoReplyMailOptions)])

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
