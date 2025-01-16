// Import necessary MUI components
import { TextField, Button, Box, Typography } from "@mui/material";
import HamburgerMenu from "../../../components/hamburgerMenu";
const Login = () => {
  function handleBackBtn() {
    return window.history.back();
  }
  return (
    <>
      <HamburgerMenu />
      <Button onClick={handleBackBtn} variant="contained" color="primary">
        back
      </Button>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 400,
          margin: "auto",
          marginTop: "3rem",
          padding: 3,
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Log In
        </Typography>

        {/* Email Field */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
          fullWidth
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
          fullWidth
        />

        {/* Sign Up Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </>
  );
};

export default Login;
