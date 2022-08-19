import React from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string("Enter email")
      .required("Email is required")
      .email("Email is invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    console.log(formData);
    navigate("/login");
    //dispatch(loginLocal(formData));
  };

  return (
    <>
      <Stack mx="auto" mt="15%" minWidth="30%" spacing={3}>
        <Stack alignItems="center">
          <Typography textAlign="center" gutterBottom variant="h4" mb={5}>
            <FaEdit /> Reset Passowrd
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

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          sx={{ marginBottom: "10px" }}
        >
          Reset Password
        </Button>
      </Stack>
    </>
  );
};

export default ResetPassword;
