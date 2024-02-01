import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/cardSlice";
import { TextField, Stack, Typography, Container, Button } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.card);
  const usersState = cardState.users;
  console.log(cardState);

  if (cardState.loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(fetchUsers())}
        >
          Fetch Data
        </Button>
      </div>

      <Container
        align="center"
        sx={{
          width: "600px",
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
      <Container
        align="center"
        sx={{
          width: "600px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack>
          <Typography variant="h4">User Information</Typography>

          {usersState.map((user) => (
            <div key={user.id}>
              <Typography>Id: {user.id}</Typography>
              <Typography>Name: {user.name}</Typography>
              <Typography>Username: {user.username}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>Phone: {user.phone}</Typography>
              <Typography>Website: {user.website}</Typography>
              <Typography>Company: {`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}</Typography>
              <Typography> Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, lat:${user.address.geo.lat}, lng:${user.address.geo.lng}`}
              </Typography>
              <hr />
            </div>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default App;
