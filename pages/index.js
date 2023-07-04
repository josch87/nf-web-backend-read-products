import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import styled from "styled-components";
import useSWR from "swr";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

export default function HomePage() {
  const { mutate } = useSWR("/api/products");

  async function handleAddProducts(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        mutate();
      }
    } catch (error) {
      console.error("handleAddProducts:", error);
    }
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm
        onSubmit={handleAddProducts}
        heading="Add a new Fish"
        buttonText="Submit"
      />
      <hr />
      <ProductList />
    </>
  );
}
