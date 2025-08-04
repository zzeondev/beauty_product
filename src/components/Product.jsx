import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getProducts } from "../apis/productApi";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  padding: 16px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  max-width: 700px;
  align-items: center;
`;

const Image = styled.img`
  width: 60px;
  height: auto;
  margin-right: 16px;
  border-radius: 8px;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Price = styled.p`
  color: #e91e63;
  font-weight: bold;
  margin: 4px 0;
`;

const Description = styled.p`
  color: #555;
  margin: 0;
`;

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      setProducts(res.products || []);
    };
    fetchData();
  }, []);

  return (
    <Box>
      {products.map(product => (
        <Card key={product.id}>
          <Image src={product.thumbnail} alt={product.title} />
          <Info>
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <Description>{product.description}</Description>
          </Info>
        </Card>
      ))}
    </Box>
  );
}

export default Product;
