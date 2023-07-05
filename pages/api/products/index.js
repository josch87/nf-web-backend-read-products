import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      return response.status(200).json(products);
    } catch (error) {
      console.error("API Products get error:", error);
    }
  } else if (request.method === "POST") {
    try {
      const productData = request.body;
      Product.create(productData);
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error("API Products Post error:", error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ status: "Method not allowed" });
  }
}
