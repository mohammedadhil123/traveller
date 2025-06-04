import React from "react";
import styled from "styled-components";
export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  padding: 16px 32px;
  background-color: var(--primary-color);
  border: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;
