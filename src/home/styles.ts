import styled from "styled-components";
import { Link } from "react-router-dom";
import header from "../assets/img/header.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  background-color: #fcb48f;
  padding: 40px;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fcfbfb;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
`;

export const LinkMenu = styled(Link)`
  font-size: 15px;
  letter-spacing: 3px;
  font-family: Trebuchet MS;
  color: #3f50b5;
  text-align: center;
  padding: 15px;
  margin-top: 15px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fcfbfb;
  padding: 5px;
  border-radius: 12px;
  width: 90%;
  text-decoration-line: "none";
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fcfbfb;
  margin-bottom: 15px;
`;

export const Title = styled.text`
  font-size: 30px;
  padding-left: 10px;
  font-weight: bold;
  font-family: Trebuchet MS;
  color: #3f50b5;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${header});
  border-radius: 15px;
  height: 130px;
  border: 1px solid #c5e0ce;
`;
