import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled("div")({
  background: "grey",
  minHeight: 100,
  minWidth: 100,
});

const Word = styled("p")({
  color: "#fff",
  fontSize: "1rem",
  textAlign: "center",
  display: "inline",
});
function App() {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "grey",
          maxWidth: "100%",
          minHeight: "300px",
        }}
      >
        <Grid item xs={4}>
          <img src="https://via.placeholder.com/100" />
        </Grid>
        <Grid item container spacing={2} xs={8}>
          <Grid item xs={2}>
            hello how are you
          </Grid>
          <Grid item xs={8}>
            grid Item 2
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
