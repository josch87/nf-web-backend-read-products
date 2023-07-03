import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id);
    return response.status(200).json(product);
  } else if (request.method === "PUT") {
    await Product.findByIdAndUpdate(id, { $set: request.body });
    return response
      .status(200)
      .json({ status: "Product successfully updated" });
  } else {
    return response.status(405).json({ status: "Method not allowed" });
  }
}
