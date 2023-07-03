import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else if (request.method === "POST") {
    try {
      const productData = request.body;
      Product.create(productData);
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ status: "Method not allowed" });
  }
}
