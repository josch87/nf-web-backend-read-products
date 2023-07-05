import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id);
    return response.status(200).json(product);
  } else if (request.method === "PUT") {
    try {
      await Product.findByIdAndUpdate(id, { $set: request.body });
      return response
        .status(200)
        .json({ status: "Product successfully updated" });
    } catch (error) {
      console.error("API Single Product Put error:", error);
      response.status(400).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ status: "Product successfully deleted." });
    } catch (error) {
      console.error("API Single Product Delete error:", error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ status: "Method not allowed" });
  }
}
