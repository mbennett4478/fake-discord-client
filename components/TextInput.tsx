import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import styled from "@emotion/styled";

const Text = styled(Typography)({
  color: "#8e9297",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "10px !important",
});

const RootContainer = styled(Grid)({
  width: "100%",
  marginTop: "1em",
});

const TextInput = ({ label, ...inputProps }) => (
  <RootContainer>
    <Grid item>
      <Text variant="h5">{label}</Text>
    </Grid>
    <Grid item>
      <TextField
        {...inputProps}
        style={{ width: "100%" }}
        variant="outlined"
        margin="dense"
      />
    </Grid>
  </RootContainer>
);

export default TextInput;
