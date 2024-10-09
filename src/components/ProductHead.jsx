import styled from "styled-components";
import Products from "./Products";
import product from "./product";

const ProductHead = () => {
  return (
    <Items>
      <div className="itemsHeading" id="products">
        <h2>Featured Properties</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="headingBtns">
          <button>All properties</button>
          <button>For Sale</button>
          <button>For Rent</button>
        </div>
      </div>
      <div className="products">
        {product.map((products) => (
          <Products
            key={products.id}
            image={products.image}
            title={products.title}
            location={products.location}
            bed={products.bed}
            bathRoom={products.bathRoom}
            area={products.Area}
            price={products.price}
          />
        ))}
      </div>
    </Items>
  );
};

export default ProductHead;

const Items = styled.div`
  margin-top: 3rem;

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  h2 {
    font-size: 40px;
    font-weight: 600;
    color: #001f3f;
  }
  .itemsHeading p {
    font-size: 13px;
  }
  .itemsHeading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  .headingBtns {
    display: flex;
    gap: 2rem;
  }
  button {
    text-decoration: none;
    background-color: transparent;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 3px;
    color: #2e236c;
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 1rem;
      font-weight: 600;
    }
    .itemsHeading p {
      font-size: 0.7rem;
    }
    .headingBtns {
      gap: 1rem;
    }
    .products {
      padding: 5px 10px;
      gap: 1rem;
    }
    .items {
      width: 190px;
      height: 160px;
      padding-bottom: 90px;
    }
    .overlayButton1 {
      left: 7%;
    }
    .overlayButton2 {
      left: 45%;
    }
    .flexContainer h3 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
