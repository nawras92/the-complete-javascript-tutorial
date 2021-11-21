import { useState } from "react";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "../shared/Dialog";

const Controls = (props) => {
  const { postID } = props;
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const deleteAnItem = () => {
    console.log(`The post with id ${postID} will be deleted`);
    setDialogOpen(false);
  };
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <IconButton
            color="secondary"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <ModeEditIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <IconButton
              color="info"
              size="small"
              href={`update-post/${postID}`}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton color="error" size="small">
              <DeleteIcon
                fontSize="small"
                onClick={() => setDialogOpen(true)}
              />
            </IconButton>
          </Collapse>
        </Grid>
      </Grid>
      <Dialog
        title="delete an item"
        text="are you sure you want to delete this item?"
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        onDialogConfirm={deleteAnItem}
      />
    </>
  );
};

export default Controls;
