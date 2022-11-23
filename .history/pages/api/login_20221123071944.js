// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../modals/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  const { password, email } = JSON.parse(req.body);
  console.log(email, password);
  if (req.method === "POST") {
    let user = await User.findOne({ email: email });
    if (user) {
      if (
        CryptoJS.AES.decrypt(user.password, "secret key 123").toString(
          CryptoJS.enc.Utf8
        ) === password
      ) {
        var token = jwt.sign(
          { email: user.email, username: user.username },
          "loggedIn"
        );
        res.status(200).json({
          success: true,
          email: user.email,
          username: user.username,
        });
      } else {
        res.status(400).json({ success: false, error: "Invalud Credentials" });
      }
    } else {
      res.status(400).json({ success: false, error: "No User Found" });
    }
  } else {
    res.status(400).json({ error: "Invalid Method" });
  }
};
export default connectDb(handler);
