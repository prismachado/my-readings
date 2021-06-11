import styled from "styled-components";
import header from "../assets/img/header.jpg";
import InputBase from "@material-ui/core/InputBase";
import { Card, CardContent } from "@material-ui/core";

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

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const LinkMenu = styled.text`
  font-size: 15px;
  letter-spacing: 3px;
  font-family: Trebuchet MS;
  color: #3f50b5;
  text-align: center;
  padding: 10px;
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

export const Shelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #c5e0ce;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
`;

export const ShelfTitle = styled.text`
  font-size: 22px;
  padding-left: 10px;
  font-family: Trebuchet MS;
  color: #3f50b5;
  letter-spacing: 2px;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Book = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 130px;
  border-radius: 15px;
`;

export const BookMedia = styled.img`
  display: flex;
  height: 140px;
  width: 100px;
`;

export const BookContent = styled(CardContent)`
  align-items: center;
  display: flex;
  height: 0px;
`;

export const BookTitle = styled.text`
  text-align: center;
  font-size: 10px;
`;

export const InitSearch = styled.div`
  display: flex;
  //flex: 1;
  justify-content: center;
  flex-direction: column;
  height: 30vh;
  //border: 1px solid #000;
  align-items: center;
  padding: 20px;
  height: 50vh;
`;

export const SearchView = styled.div`
  position: relative;
  border-radius: 15px;
  margin-right: 2px;
`;

export const IconView = styled.div`
  padding-left: 10px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled(InputBase)`
  border: 1px solid gray;
  border-radius: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 40px;
  width: 100%;
`;

export const InfoSearch = styled.text`
  font-size: 25px;
  padding: 10px;
  color: gray;
`;

export const ShelfText = styled.text`
  font-size: 12px;
  color: purple;
`;
