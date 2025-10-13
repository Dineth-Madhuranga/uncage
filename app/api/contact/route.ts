import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, company, service, budget, message } = data || {}

    if (!email || !name || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    // If OWNER_EMAIL not provided, fall back to SMTP_USER to ensure a valid inbox
    const ownerEmail = process.env.OWNER_EMAIL || process.env.CONTACT_TO || user
    // With Gmail SMTP, set From as your Gmail address and provide name separately
    const fromName = (process.env.MAIL_FROM || "UNCAGE").replace(/<.*?>/g, "").trim() || "UNCAGE"
    const fromAddress = user!

    if (!host || !user || !pass) {
      return NextResponse.json({ ok: false, error: "SMTP not configured on server" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    // Prepare safe values
    const safe = (v: string) => String(v || "-")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
    const safeMessage = safe(message).replace(/\n/g, "<br>")

    // Subjects
    const ownerSubject = `New contact form submission from ${name}`
    const userSubject = `Thanks for contacting UNCAGE`

    // HTML templates
    const logoUrl = "https://i.postimg.cc/5y0g3DBn/uk.png"
    const gradient = "linear-gradient(90deg,#7c3aed,#22d3ee)"

    const ownerHtml = `<!doctype html><html><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/><meta name=\"color-scheme\" content=\"light only\"/><title>New Contact</title></head>
    <body style=\"margin:0;padding:0;background:#0b0c10;font-family:Inter,Helvetica,Arial,sans-serif;\">
      <div style=\"max-width:640px;margin:0 auto;background:#0f1115;color:#e6e6e6;border:1px solid #1f2430;border-radius:12px;overflow:hidden;\">
        <div style=\"padding:20px 24px;border-bottom:1px solid #1f2430;display:flex;align-items:center;gap:12px;\">
          <img src=\"${logoUrl}\" alt=\"UNCAGE\" width=\"36\" height=\"36\" style=\"display:block;\"/>
          <div style=\"font-size:18px;font-weight:700;letter-spacing:.3px;background:${gradient};-webkit-background-clip:text;background-clip:text;color:transparent;\">New Inquiry • UNCAGE</div>
        </div>
        <div style=\"padding:16px 24px;\">
          <h1 style=\"margin:0 0 8px;font-size:18px;color:#ffffff;\">Contact Form Submission</h1>
          <p style=\"margin:0;color:#cbd5e1;font-size:13px;\">A new lead submitted the contact form.</p>
          <div style=\"margin-top:16px;border-radius:10px;background:linear-gradient(90deg,rgba(124,58,237,.10),rgba(34,211,238,.10));padding:16px;\">
            <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;border-spacing:0 8px;\">
              <tr><td style=\"width:140px;color:#94a3b8;font-size:12px;\">Name</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(name)}</td></tr>
              <tr><td style=\"width:140px;color:#94a3b8;font-size:12px;\">Email</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(email)}</td></tr>
              <tr><td style=\"width:140px;color:#94a3b8;font-size:12px;\">Company</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(company)}</td></tr>
              <tr><td style=\"width:140px;color:#94a3b8;font-size:12px;\">Service</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(service)}</td></tr>
              <tr><td style=\"width:140px;color:#94a3b8;font-size:12px;\">Budget</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(budget)}</td></tr>
            </table>
            <div style=\"margin-top:10px;\">
              <div style=\"color:#94a3b8;font-size:12px;\">Message</div>
              <div style=\"margin-top:6px;font-size:14px;color:#e6e6e6;\">${safeMessage}</div>
            </div>
          </div>
          <div style=\"margin-top:16px;\">
            <a href=\"mailto:${encodeURIComponent(email)}\" style=\"display:inline-block;text-decoration:none;background:#22d3ee;color:#0b0c10;padding:10px 14px;border-radius:10px;font-weight:700;font-size:13px;\">Reply to ${safe(name)}</a>
            <a href=\"https://wa.me/94772386251\" target=\"_blank\" rel=\"noreferrer\" style=\"display:inline-block;text-decoration:none;margin-left:8px;border:1px solid #334155;color:#e6e6e6;padding:10px 14px;border-radius:10px;font-weight:600;font-size:13px;\">Open WhatsApp</a>
          </div>
        </div>
        <div style=\"padding:14px 24px;border-top:1px solid #1f2430;color:#94a3b8;font-size:12px;\">© 2025 UNCAGE Pvt. Ltd | <a href=\"mailto:info@uncage.lk\" style=\"color:#22d3ee;text-decoration:none;\">info@uncage.lk</a></div>
      </div>
    </body></html>`

    const userHtml = `<!doctype html><html><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/><meta name=\"color-scheme\" content=\"light only\"/><title>Thanks for contacting UNCAGE</title></head>
    <body style=\"margin:0;padding:0;background:#0b0c10;font-family:Inter,Helvetica,Arial,sans-serif;\">
      <div style=\"max-width:640px;margin:0 auto;background:#0f1115;color:#e6e6e6;border:1px solid #1f2430;border-radius:12px;overflow:hidden;\">
        <div style=\"padding:24px 24px 12px;\">
          <div style=\"display:flex;align-items:center;gap:12px;\">
            <img src=\"${logoUrl}\" alt=\"UNCAGE\" width=\"40\" height=\"40\" style=\"display:block;\"/>
            <div style=\"font-size:20px;font-weight:700;letter-spacing:.3px;background:${gradient};-webkit-background-clip:text;background-clip:text;color:transparent;\">UNCAGE</div>
          </div>
          <div style=\"margin-top:16px;border-radius:10px;background:linear-gradient(90deg,rgba(124,58,237,.15),rgba(34,211,238,.15));padding:16px;\">
            <h1 style=\"margin:0;font-size:22px;line-height:1.4;color:#ffffff;\">Thanks for getting in touch, ${safe(name)} 👋</h1>
            <p style=\"margin:8px 0 0;color:#cbd5e1;font-size:14px;line-height:1.6;\">We’ve received your message and will get back to you shortly.</p>
          </div>
        </div>
        <div style=\"padding:0 24px 8px;\">
          <h2 style=\"margin:0 0 8px;font-size:16px;color:#ffffff;\">Your request summary</h2>
          <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;border-spacing:0 8px;\">
            <tr><td style=\"width:160px;color:#94a3b8;font-size:13px;\">Name</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(name)}</td></tr>
            <tr><td style=\"width:160px;color:#94a3b8;font-size:13px;\">Email</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(email)}</td></tr>
            <tr><td style=\"width:160px;color:#94a3b8;font-size:13px;\">Company</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(company)}</td></tr>
            <tr><td style=\"width:160px;color:#94a3b8;font-size:13px;\">Service</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(service)}</td></tr>
            <tr><td style=\"width:160px;color:#94a3b8;font-size:13px;\">Budget</td><td style=\"font-size:14px;color:#e6e6e6;\">${safe(budget)}</td></tr>
            <tr><td style=\"vertical-align:top;color:#94a3b8;font-size:13px;padding-top:8px;\">Message</td><td style=\"font-size:14px;color:#e6e6e6;padding-top:8px;\">${safeMessage}</td></tr>
          </table>
        </div>
        <div style=\"padding:8px 24px 24px;\">
          <a href=\"https://www.linkedin.com/company/uncage2/\" target=\"_blank\" rel=\"noreferrer\" style=\"display:inline-block;text-decoration:none;background:${gradient};color:#ffffff;padding:12px 18px;border-radius:10px;font-weight:600;font-size:14px;\">Follow us on LinkedIn</a>
          <div style=\"margin-top:12px;color:#94a3b8;font-size:12px;\">Prefer WhatsApp? Chat with us at <a href=\"https://wa.me/94772386251\" style=\"color:#22d3ee;text-decoration:none;\">077 238 6251</a></div>
        </div>
        <div style=\"padding:16px 24px;border-top:1px solid #1f2430;color:#94a3b8;font-size:12px;\">© 2025 UNCAGE Pvt. Ltd | <a href=\"mailto:info@uncage.lk\" style=\"color:#22d3ee;text-decoration:none;\">info@uncage.lk</a> | Sri Lanka</div>
      </div>
    </body></html>`

    const [ownerRes, userRes] = await Promise.all([
      transporter.sendMail({
        from: { name: fromName, address: fromAddress },
        to: ownerEmail,
        replyTo: email,
        subject: ownerSubject,
        html: ownerHtml,
        bcc: ownerEmail !== user ? user : undefined,
      }),
      transporter.sendMail({
        from: { name: fromName, address: fromAddress },
        to: email,
        subject: userSubject,
        html: userHtml,
      }),
    ])

    console.log("[contact] owner send result:", {
      messageId: ownerRes.messageId,
      accepted: ownerRes.accepted,
      rejected: ownerRes.rejected,
      response: ownerRes.response,
    })
    console.log("[contact] user send result:", {
      messageId: userRes.messageId,
      accepted: userRes.accepted,
      rejected: userRes.rejected,
      response: userRes.response,
    })

    return NextResponse.json({
      ok: true,
      ownerAccepted: ownerRes.accepted,
      ownerRejected: ownerRes.rejected,
      userAccepted: userRes.accepted,
      userRejected: userRes.rejected,
    })
  } catch (err) {
    console.error("/api/contact error:", err)
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 })
  }
}
