// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose";

async function handler(req, res) {
  const { email } = JSON.parse(req.body);

  let id = "323233232333";

  let emailText = `
  Hi ${name},
  /n
  There was a request to change your password!
  /n
  If you did not make this request then please ignore this email.
  /n
  Otherwise, please click this link to change your password: <a href=${`${process.env.NEXT_PUBLIC_HOST}/forgotpassword?id=${id}`}>${link}</a>
  /n
  Thank you..
  `;

  res.status(200).json({ name: "John Doe" });
}

export default connectDb(handler);
