import {
  Stack,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import { useDispatch, useSelector } from "react-redux";
//import { reset, loginLocal } from "../redux/features/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, success, error } = useSelector((state) => state.user);

  const validationSchema = Yup.object({
    email: Yup.string("Enter email")
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string("Enter password")
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (error) toast.error(error);
    if (success) {
      navigate("/");
    }

    //dispatch(reset());
  }, [user, loading, error, success, navigate, dispatch]);

  const onSubmit = (formData) => {
    console.log(formData);
    //dispatch(loginLocal(formData));
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <>
      <Stack mx="auto" mt="15%" minWidth="30%" spacing={3}>
        {/* login */}

        <Stack alignItems="center">
          <Typography textAlign="center" gutterBottom variant="h4" mb={5}>
            <FaUser /> Login
          </Typography>
        </Stack>

        {/* email input */}
        <TextField
          id="email"
          variant="outlined"
          required
          type="email"
          name="email"
          label="Email"
          size="small"
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />

        {/* password input */}
        <TextField
          required
          variant="outlined"
          type="password"
          name="email"
          label="Password"
          size="small"
          {...register("password")}
          error={errors.password ? true : false}
          helperText={errors.password?.message}
        />
        <Stack spacing={2} alignItems="center">
          {/* login button */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}
            sx={{ marginBottom: "10px" }}
          >
            Sign In
          </Button>

          {/* no account */}
          <Typography
            component={Link}
            to="/register"
            variant="body2"
            sx={{ textDecoration: "none" }}
          >
            Don't have Account ? Register
          </Typography>
          <Typography component={Link} to="/reset-password" variant="body2">
            Forgot Password?
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
