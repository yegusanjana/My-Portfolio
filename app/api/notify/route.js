import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
    const userAgent = req.headers.get("user-agent") || "unknown"

    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
      },
    })


    await transporter.sendMail({
      from: `"Portfolio Tracker" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      subject: " New Portfolio Visit",
      text: `A new visitor opened your portfolio site:

IP: ${ip}
User-Agent: ${userAgent}
Time: ${new Date().toLocaleString()}

Cheers,
Your Portfolio Bot`,
    })

    return new Response(JSON.stringify({ message: "Notification sent" }), {
      status: 200,
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(
      JSON.stringify({ message: "Error sending email", error: error.message }),
      { status: 500 }
    )
  }
}
