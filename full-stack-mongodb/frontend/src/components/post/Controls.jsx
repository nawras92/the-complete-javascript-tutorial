import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "../shared/Dialog";
import requests from "../../api/posts/requests";

const Controls = (props) => {
  const { postID } = props;
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteTriggered, setDeleteTriggered] = useState(false);
  const deleteAnItem = () => {
    setDialogOpen(false);
    setDeleteTriggered(true);
  };

  useEffect(() => {
    const deletePost = async (id) => {
      const data = await requests.deleteOne(id);
      alert(data.message);
      window.location.reload();
    };
    if (deleteTriggered) {
      deletePost(postID);
    }
  }, [postID, deleteTriggered]);

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
              href={`/update-post/${postID}`}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="error"
              size="small"
              onClick={() => setDialogOpen(true)}
            >
              <DeleteIcon fontSize="small" />
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
