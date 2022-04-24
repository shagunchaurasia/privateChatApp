import { useState, useRef } from "react";
import { Box, Stack, Typography, Button, TextField, Card } from "@mui/material";

export const AuthScreen = () => {
  const [formData, setFormData] = useState({});
  const [showLogin, setShowLogin] = useState(true);
  const authForm = useRef(null);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <Box
      component="form"
      onSubmit={onSubmitHandler}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      ref={authForm}
    >
      <Card sx={{ padding: "20px" }} variant="outlined">
        <Stack direction="column" spacing={2} sx={{ width: "400px" }}>
          <Typography variant="h5">
            Please {showLogin ? "Log In" : "Sign Up"}!
          </Typography>

          {!showLogin && (
            <>
              <TextField
                label="First Name"
                variant="standard"
                name="firstName"
                onChange={handleChange}
              ></TextField>

              <TextField
                label="Last Name"
                variant="standard"
                name="lastName"
                onChange={handleChange}
              ></TextField>
            </>
          )}

          <TextField
            type="email"
            label="Email"
            variant="standard"
            name="email"
            onChange={handleChange}
          ></TextField>
          <TextField
            type="password"
            label="Password"
            variant="standard"
            name="password"
            onChange={handleChange}
          ></TextField>

          <Typography
            variant="subtitle1"
            textAlign="center"
            onClick={() => {
              setShowLogin((previousState) => !previousState);
              setFormData([]);
              // authForm.current.reset()
            }}
          >
            {showLogin ? "Sign Up?" : "Log In?"}
          </Typography>
          <Button variant="outlined" type="submit">
            {showLogin ? "Log In" : "Sign Up"}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};
