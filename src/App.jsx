import "./App.css";
import {
  TextField,
  Stack,
  Typography,
  Container,
  Button,
} from "@mui/material";

const App = () => {
  return (
    <>
      <Container
        align="center"
        sx={{
          width: "600px",
          height: "450px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack>
          <Typography variant="h4">Login Form</Typography>

          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            margin="normal"
            placeholder="Enter Username..."
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="normal"
            placeholder="Enter your email..."
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="normal"
            placeholder="Enter your password..."
          />
          <TextField
            id="outlined-basic"
            label="Phone No."
            variant="outlined"
            margin="normal"
            placeholder="Enter phone number..."
          />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default App;
