// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../modals/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  console.log(req.query);
  let products = await Product.find();
  res.status(200).json(products);
};
export default connectDb(handler);
