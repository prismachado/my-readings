import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const shelfs = ["Lendo", "Quero ler", "Lidos"];

export interface SimpleDialogProps {
  open: boolean;
  shelfOrigin: string;
  bookIndex: number;
  onClose: (shelfOrigin: string, shelfMove: string, bookIndex: number) => void;
}

const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, shelfOrigin, bookIndex, open } = props;

  const handleClose = () => {
    onClose(shelfOrigin, "", bookIndex);
  };

  const handleListItemClick = (shelfMove: string) => {
    onClose(shelfOrigin, shelfMove, bookIndex);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Mover para:</DialogTitle>
      <List>
        {shelfs.map((shelf) => (
          <ListItem
            button
            onClick={() => handleListItemClick(shelf)}
            key={shelf}
          >
            <ListItemText primary={shelf} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
