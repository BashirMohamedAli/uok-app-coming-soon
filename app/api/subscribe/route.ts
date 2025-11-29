import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // Validate Gmail address
    const emailDomain = email.split("@")[1]?.toLowerCase()
    if (emailDomain !== "gmail.com") {
      return NextResponse.json(
        { error: "Please use a Gmail address (e.g., yourname@gmail.com)" },
        { status: 400 }
      )
    }

    // Create Nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Send confirmation email to the subscriber
    await transporter.sendMail({
      from: `"University of Kabridahar" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Welcome to University of Kabridahar Beta Testing Program!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f7f8;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f6f7f8; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; border: 1px solid #cbd5e1; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #137fec 0%, #0d6bd8 100%);">
                      <h1 style="color: #ffffff; font-size: 28px; margin: 0 0 12px 0; font-weight: 700; line-height: 1.2;">
                        Welcome Beta Tester!
                      </h1>
                      <p style="color: rgba(255, 255, 255, 0.95); font-size: 16px; margin: 0; line-height: 1.5;">
                        Thank you for joining our beta testing program
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px 40px;">
                      <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                        Thank you for signing up to be a beta tester for the <strong>University of Kabridahar</strong> mobile app. Your participation is crucial in helping us launch a high-quality app on Google Play Store.
                      </p>
                      
                      <div style="background-color: #f1f5f9; border-left: 4px solid #137fec; border-radius: 8px; padding: 20px; margin: 24px 0;">
                        <p style="color: #137fec; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">
                          What happens next?
                        </p>
                        <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0;">
                          We need at least <strong>12 beta testers</strong> to proceed with Google Play Store closed testing. Once we reach this goal, you'll receive an email with a direct link to join our closed testing program on Google Play Store.
                        </p>
                      </div>
                      
                      <div style="background-color: #f6f7f8; border-radius: 8px; padding: 16px; margin: 24px 0; border: 1px solid #e2e8f0;">
                        <p style="color: #0f172a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                          Important Information:
                        </p>
                        <ul style="color: #475569; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
                          <li>You'll receive the Play Store invite link via email</li>
                          <li>Make sure to opt-in to the closed testing program</li>
                          <li>Your feedback helps us improve the app</li>
                        </ul>
                      </div>
                      
                      <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 24px 0 0 0; text-align: center;">
                        Stay tuned for your invite! We'll notify you as soon as we're ready.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; background-color: #f6f7f8; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="color: #64748b; font-size: 12px; margin: 0 0 8px 0;">
                        <strong style="color: #0f172a;">University of Kabridahar</strong>
                      </p>
                      <p style="color: #94a3b8; font-size: 11px; margin: 0;">
                        © 2025 University of Kabridahar. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    // Send notification email to admin
    await transporter.sendMail({
      from: `"Beta Tester Signup" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Beta Tester Signup - University of Kabridahar App",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f7f8;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f6f7f8; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 500px; width: 100%; background-color: #ffffff; border-radius: 12px; border: 1px solid #cbd5e1; overflow: hidden;">
                  <tr>
                    <td style="padding: 30px; background: linear-gradient(135deg, #137fec 0%, #0d6bd8 100%);">
                      <h2 style="color: #ffffff; margin: 0 0 8px 0; font-size: 22px; font-weight: 700;">New Beta Tester Signup!</h2>
                      <p style="color: rgba(255, 255, 255, 0.95); margin: 0; font-size: 14px;">A new user wants to test the University of Kabridahar app</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px;">
                      <div style="background-color: #f1f5f9; border-left: 4px solid #137fec; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                        <p style="color: #0f172a; font-weight: 600; font-size: 16px; margin: 0 0 4px 0;">Email Address:</p>
                        <p style="color: #137fec; font-weight: 600; font-size: 18px; margin: 0;">${email}</p>
                      </div>
                      <p style="color: #64748b; font-size: 12px; margin: 0 0 20px 0;">
                        <strong>Timestamp:</strong> ${new Date().toLocaleString()}
                      </p>
                      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                      <div style="background-color: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 12px;">
                        <p style="color: #92400e; font-size: 12px; margin: 0; line-height: 1.5;">
                          <strong>📋 Reminder:</strong> You need at least <strong>12 testers</strong> with personal Gmail accounts to publish on Google Play Store closed testing.
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ message: "Successfully signed up for beta testing" }, { status: 200 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: "Failed to process signup. Please try again later." }, { status: 500 })
  }
}
