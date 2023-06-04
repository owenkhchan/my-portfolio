// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";

export default async (req, res) => {
	const { name, email, message } = req.body;
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: email,
			to: process.env.SMTP_USER,
			subject: `Contact form submission from ${name}`,
			html: `
			<p><strong>Name: </strong> ${name}</p>
        	<p><strong>Email: </strong> ${email}</p>
        	<p><strong>Message: <br></strong> ${message}</p><br>
      		`,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
	return res.status(200).json({ error: "" });
};
