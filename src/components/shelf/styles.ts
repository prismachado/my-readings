
import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';


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
