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
import { read, readings, wantToRead } from "../../components/mockData";
import SimpleDialog from "./components/simpleDialog";

interface BookParams {
  title: string;
  image: string;
}

const ShelfBooks = () => {
  const [bookRead, setBookRead] = useState(read);
  const [bookWantToRead, setBookWantToRead] = useState(wantToRead);
  const [bookReadings, setBookReadings] = useState(readings);
  const [open, setOpen] = useState(false);
  const [bookAdd, setBookAdd] = useState({} as BookParams);
  const [bookIndex, setBookIndex] = useState("");
  const [shelfOrigin, setShelfOrigin] = useState("");
  const [shelfMove, setShelfMove] = useState("");

  useEffect(() => {
    if (shelfMove !== "") {
      switch (shelfMove) {
        case "Lendo":
          bookReadings.push(bookAdd);
          setBookReadings(bookReadings);
          break;

        case "Quero ler":
          bookWantToRead.push(bookAdd);
          setBookWantToRead(bookWantToRead);
          break;

        case "Lidos":
          bookRead.push(bookAdd);
          setBookRead(bookRead);
          break;

        default:
          break;
      }

      setBookIndex("");
      setShelfOrigin("");
      setShelfMove("");
      setBookAdd({} as BookParams);
    }
  }, [shelfMove]);

  const removeBookFromShelf = (origin: string, index: number) => {
    switch (origin) {
      case "Lendo":
        setBookAdd(bookReadings[index]);
        bookReadings.splice(index, 1);
        setBookReadings(bookReadings);
        break;

      case "Quero ler":
        setBookAdd(bookWantToRead[index]);
        bookWantToRead.splice(index, 1);
        setBookWantToRead(bookWantToRead);
        break;

      case "Lidos":
        setBookAdd(bookRead[index]);
        bookRead.splice(index, 1);
        setBookRead(bookRead);
        break;

      default:
        break;
    }
  };

  const handleClickOpen = (index: number, shelfOrigin: string) => {
    setOpen(true);
    setBookIndex(String(index));
    setShelfOrigin(shelfOrigin);
  };

  const handleClose = (origin: string, move: string, index: number) => {
    setOpen(false);

    if (move !== "") {
      setShelfMove(move);
      removeBookFromShelf(origin, index);
    }
  };

  return (
    <>
      <Shelf>
        <ShelfTitle>Lendo</ShelfTitle>
      </Shelf>
      <CardContainer key={"readings" + bookReadings.length}>
        {bookReadings.map((book, index) => (
          <Book key={index}>
            <BookMedia src={book.image} />
            <BookContent>
              <BookTitle>{book.title}</BookTitle>
            </BookContent>
            <CardActions>
              <SystemUpdateAltIcon
                fontSize="small"
                color="primary"
                onClick={() => {
                  handleClickOpen(index, "Lendo");
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
        {bookWantToRead.map((book, index) => (
          <Book key={index}>
            <BookMedia src={book.image} />
            <BookContent>
              <BookTitle>{book.title}</BookTitle>
            </BookContent>
            <CardActions>
              <SystemUpdateAltIcon
                fontSize="small"
                color="primary"
                onClick={() => {
                  handleClickOpen(index, "Quero ler");
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
        {bookRead.map((book, index) => (
          <Book key={index}>
            <BookMedia src={book.image} />
            <BookContent>
              <BookTitle>{book.title}</BookTitle>
            </BookContent>
            <CardActions>
              <SystemUpdateAltIcon
                fontSize="small"
                color="primary"
                onClick={() => {
                  handleClickOpen(index, "Lidos");
                }}
              />
            </CardActions>
          </Book>
        ))}
      </CardContainer>
      <SimpleDialog
        shelfOrigin={shelfOrigin}
        bookIndex={Number(bookIndex)}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default ShelfBooks;
