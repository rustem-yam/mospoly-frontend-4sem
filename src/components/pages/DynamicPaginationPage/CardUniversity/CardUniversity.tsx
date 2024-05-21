import styled from "styled-components";
import { IUniversity } from "../types";
import { FC } from "react";

const CardStyled = styled.div`
  height: 100px;
  background-color: #e9e7e7;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <p>{data.name}</p>
    <span>{data.country}</span>
  </CardStyled>
);

export default CardUniversity;
