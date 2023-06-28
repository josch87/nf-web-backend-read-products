import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id);
    return response.status(200).json(product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
