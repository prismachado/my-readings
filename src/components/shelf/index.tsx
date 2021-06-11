import { useEffect, useState } from "react";
import {
  Shelf,
  ShelfTitle,
  CardContainer,
  Book,
  BookMedia,
  BookContent,
  BookTitle,
} from "./styles";

import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { CardActions } from "@material-ui/core";
import SimpleDialog from "../simpleDialog";
import { getAll, update } from "../../api/BooksAPI";

export interface Books {
  title: string;
  shelf: string;
  imageLinks: Image;
}
export interface Image {
  thumbnail: string;
}

const ShelfBooks = () => {
  const [bookRead, setBookRead] = useState([]);
  const [bookWantToRead, setBookWantToRead] = useState([]);
  const [bookReadings, setBookReadings] = useState([]);
  const [open, setOpen] = useState(false);
  const [bookMove, setBookMove] = useState<Books>();
  const [shelfMove, setShelfMove] = useState("");

  const getbooks = async () => {
    if (shelfMove !== "") {
      await update(bookMove, shelfMove);
    }

    const booksApi = await getAll();

    setBookReadings(
      booksApi.filter((book: Books) => book.shelf === "currentlyReading")
    );

    setBookWantToRead(
      booksApi.filter((book: Books) => book.shelf === "wantToRead")
    );

    setBookRead(booksApi.filter((book: Books) => book.shelf === "read"));
  };

  useEffect(() => {
    getbooks();
  }, []);

  useEffect(() => {
    if (shelfMove !== "") {
      getbooks();
    }
  }, [shelfMove]);

  const handleClickOpen = (bookMove: Books) => {
    setOpen(true);
    setBookMove(bookMove);
  };

  const handleClose = (move: string) => {
    setOpen(false);

    if (move !== "") {
      setShelfMove(move);
    }
  };

  return (
    <>
      <Shelf>
        <ShelfTitle>Lendo</ShelfTitle>
      </Shelf>
      <CardContainer key={"readings" + bookReadings.length}>
        {bookReadings.map((book: Books, index) => (
          <Book key={index}>
            <BookMedia src={book.imageLinks.thumbnail} />
            <BookContent>
              <BookTitle>{book.title}</BookTitle>
            </BookContent>
            <CardActions>
              <SystemUpdateAltIcon
                fontSize="small"
                color="primary"
                onClick={() => {
                  handleClickOpen(book);
                }}
              />
            </CardActions>
          </Book>
        ))}
      </CardContainer>

      <Shelf>
        <ShelfTitle>Quero ler</ShelfTitle>
      </Shelf>
      <CardContainer key={"want" + bookWantToRead.length}>
        {bookWantToRead.map((book: Books, index) => (
          <Book key={index}>
            <BookMedia src={book.imageLinks.thumbnail} />
            <BookContent>
              <BookTitle>{book.title}</BookTitle>
            </BookContent>
            <CardActions>
              <SystemUpdateAltIcon
                fontSize="small"
                color="primary"
                onClick={() => {
                  handleClickOpen(book);
                }}
              />
            </CardActions>
          </Book>
        ))}
      </CardContainer>

      <Shelf>
        <ShelfTitle>Lidos</ShelfTitle>
      </Shelf>
      <CardContainer key={"read" + bookRead.length}>
        {bookRead.map((book: Books, index) => (
          <Book key={index}>
            <BookMedia src={book.imageLinks.thumbnail} />
            <BookContent>
              <BookTitle>{book.title}</BookTitle>
            </BookContent>
            <CardActions>
              <SystemUpdateAltIcon
                fontSize="small"
                color="primary"
                onClick={() => {
                  handleClickOpen(book);
                }}
              />
            </CardActions>
          </Book>
        ))}
      </CardContainer>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  );
};

export default ShelfBooks;
