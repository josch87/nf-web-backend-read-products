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

  // const product = products.find((product) => product.id === id);

  // if (!product) {
  //   return response.status(404).json({ status: "Not Found" });
  // }

  // response.status(200).json(product);
}
