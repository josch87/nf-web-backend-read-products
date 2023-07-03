import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import { useState } from "react";

export default function ProductForm({ onSubmit, heading, product }) {
  const [nameValue, setNameValue] = useState(product?.name);
  const [descriptionValue, setDescriptionValue] = useState(
    product?.description
  );
  const [priceValue, setPriceValue] = useState(product?.price);
  const [currencyValue, setCurrencyValue] = useState(product?.currency);

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{heading}</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={nameValue}
          onChange={(event) => setNameValue(event.target.value)}
        />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          value={descriptionValue}
          onChange={(event) => setDescriptionValue(event.target.value)}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          value={priceValue}
          onChange={(event) => setPriceValue(event.target.value)}
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select
          id="currency"
          name="currency"
          value={currencyValue}
          onChange={(event) => setCurrencyValue(event.target.value)}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
