import styled from "@emotion/styled";
import React from "react";

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px;
  margin: 0 0 16px;
  padding: 18px 0 10px;

  h1 {
    font-weight: 700;
    margin-bottom: 8px;
  }
  p {
    color: #888;
  }
`;

function Header() {
  return (
    <Title>
      <h1>Beauty Product List</h1>
      <p>다양한 뷰티 제품을 한눈에 확인하세요</p>
      <p>https://dummyjson.com/products API사용예제</p>
    </Title>
  );
}

export default Header;
