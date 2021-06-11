import { useEffect, useState } from "react";
import { search, update, getAll } from "../api/BooksAPI";
import SimpleDialog from "../components/simpleDialog";

import {
  Shelf,
  ShelfTitle,
  CardContainer,
  Book,
  BookMedia,
  BookContent,
  BookTitle,
  InitSearch,
  SearchView,
  IconView,
  Input,
  InfoSearch,
  ShelfText,
} from "./styles";

import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { CardActions } from "@material-ui/core";

export interface Books {
  id: string;
  title: string;
  shelf?: string;
  imageLinks: Image;
}
export interface Image {
  thumbnail: string;
}

const shelfPtBr = (text: string) => {
  switch (text) {
    case "read":
      return "Lidos";

    case "wantToRead":
      return "Quero ler";

    case "currentlyReading":
      return "Lendo";

    default:
      break;
  }
};

const FetchBooks = () => {
  const [searchBook, setSearchBook] = useState("");
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [bookMove, setBookMove] = useState<Books>();
  const [shelfMove, setShelfMove] = useState("");

  const searchBooks = async (word: string) => {
    const booksSearch = await search(word);
    const booksApi = await getAll();

    if (booksSearch.length > 0) {
      booksSearch.map((bs: Books) => {
        booksApi.filter((ba: Books) => {
          if (ba.id === bs.id) {
            bs.shelf = ba.shelf;
          }
        });
      });
    }
    setBooks(booksSearch);
  };

  useEffect(() => {
    if (searchBook.length > 2) {
      searchBooks(searchBook);
    } else {
      setBooks([]);
    }
  }, [searchBook]);

  const updateShelf = async () => {
    if (shelfMove !== "") {
      await update(bookMove, shelfMove);
      searchBooks(searchBook);
    }
  };

  useEffect(() => {
    updateShelf();
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

  const renderSearchBooks = () => {
    if (books.length > 0) {
      return (
        <>
          <Shelf>
            <ShelfTitle>Livros</ShelfTitle>
          </Shelf>
          <CardContainer>
            {books.map((book: Books, index) => (
              <Book key={index}>
                <BookMedia src={book.imageLinks.thumbnail} />
                <BookContent>
                  <BookTitle>{book.title}</BookTitle>
                </BookContent>
                {book.shelf && (
                  <ShelfText>{`[ ${shelfPtBr(book.shelf)} ]`}</ShelfText>
                )}
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
    } else {
      return (
        <>
          <InitSearch>
            <InfoSearch>Aqui você pode buscar por livros!</InfoSearch>
            <MenuBookOutlinedIcon color="primary" />
          </InitSearch>
        </>
      );
    }
  };

  return (
    <>
      <SearchView>
        <IconView>
          <SearchIcon />
        </IconView>
        <Input
          placeholder="Buscar livros"
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => setSearchBook(event?.target.value)}
        />
      </SearchView>
      {renderSearchBooks()}
    </>
  );
};

export default FetchBooks;
