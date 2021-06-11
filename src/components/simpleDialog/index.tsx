import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (shelfMove: string) => void;
}

const SimpleDialog = (props: SimpleDialogProps) => {
  const shelfs = [
    { key: "currentlyReading", title: "Lendo" },
    { key: "wantToRead", title: "Quero ler" },
    { key: "read", title: "Lidos" },
  ];

  const { onClose, open } = props;

  const handleClose = () => {
    onClose("");
  };

  const handleListItemClick = (shelfMove: string) => {
    onClose(shelfMove);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Mover para:</DialogTitle>
      <List>
        {shelfs.map((shelf, index) => (
          <ListItem
            button
            onClick={() => handleListItemClick(shelf.key)}
            key={index}
          >
            <ListItemText primary={shelf.title} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
