import MuiDialog from "@mui/material/Dialog";
import MuiDialogActions from "@mui/material/DialogActions";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogContentText from "@mui/material/DialogContentText";
import MuiDialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Dialog = (props) => {
  const { title, text, dialogOpen, setDialogOpen, onDialogConfirm } = props;
  return (
    <>
      <MuiDialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <MuiDialogTitle>{title}</MuiDialogTitle>
        <MuiDialogContent>
          <MuiDialogContentText>{text}</MuiDialogContentText>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button onClick={onDialogConfirm}>Confirm</Button>

          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
        </MuiDialogActions>
      </MuiDialog>
    </>
  );
};

export default Dialog;
