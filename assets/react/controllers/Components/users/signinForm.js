import React from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser, clearErrors } from "./../../redux/actions/UserActions";
import Copyright from "../Copyright";
import { Formik } from "formik";
import {
  Typography,
  Alert,
  AlertTitle,
  TextField,
  Link,
  styled,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export const Field = styled(TextField)`
  background-color: transparent;
  & label.Mui-focused {
    color: black;
    font-weight: bold;
    font-size: 1rem;
  }
  & .MuiInputBase-root.Mui-focused fieldset {
    border-color: #29b027;
    outline-color: #29b027;
  }
  & .MuiFormHelperText-root.Mui-error {
    background-color: white;
    padding: 0.8rem;
  }
`;

export const LButton = styled(LoadingButton)`
  background-color: #359d38;
  margin-block: 10px;
  &:hover {
    border-color: #29a000;
    background-color: #29a000;
  }
`;

const SigninForm = (props) => {
  const location = useLocation();
  const from = location.state?.from || "/";
  let navigate = useNavigate();

  const checkoutSchema = yup.object().shape({
    username: yup.string().required(props.t("required", { ns: "login" })),
    password: yup
      .string()
      .required(props.t("required", { ns: "login" }))
      // check minimum characters
      .min(8, props.t("error_pass_length", { ns: "login" }))
      // different error messages for different requirements
      .matches(
        /[0-9]/,
        props.t("error_password", { ns: "login", val: "digit" })
      )
      .matches(
        /[a-z]/,
        props.t("error_password", { ns: "login", val: "lowercase" })
      )
      .matches(
        /[A-Z]/,
        props.t("error_password", { ns: "login", val: "uppercase" })
      ),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const handleFormSubmit = (data) => props.loginUser(data, navigate, from);

  return (
    <Box
      sx={{
        mt: 0,
        mb: 8,
        mx: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#359d38" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">
        {props.t("connection", { ns: "login" })}
      </Typography>
      {props.error && (
        <Alert
          severity="error"
          sx={{ width: "100%", mt: 3, mb: 2 }}
          onClose={() => {
            props.clearErrors();
          }}
        >
          <AlertTitle>{props.t("error", { ns: "login" })}</AlertTitle>
          <strong>{props.error}</strong>
        </Alert>
      )}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <Field
              margin="normal"
              required
              fullWidth
              id="username"
              label={props.t("username", { ns: "login" })}
              name="username"
              autoFocus
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
              error={!!touched.username && !!errors.username}
              helperText={touched.username && errors.username}
            />
            <Field
              margin="normal"
              required
              fullWidth
              name="password"
              label={props.t("password", { ns: "login" })}
              type="password"
              id="password"
              autoComplete="current-password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
            <Stack flexDirection="row" justifyContent="flex-end" alignItems="center">
              <Link
                component="button"
                variant="body1"
                sx={{ color: "#d32f2f", textDecorationColor: "#d32f2f" }}
                onClick={() => {
                  props.reset();
                }}
              >
                {props.t("want_reset", { ns: "login" })}
              </Link>
            </Stack>
            <LButton
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              loading={props.isLoading}
            >
              <span>{props.t("signin", { ns: "login" })}</span>
            </LButton>
            <Grid container>
              <Grid item xs>
                <Link
                  component="button"
                  variant="body1"
                  sx={{ color: "#3d8514" }}
                  onClick={() => {
                    props.help();
                  }}
                >
                  {props.t("want_help", { ns: "login" })}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  variant="body1"
                  sx={{ color: "#3d8514" }}
                  onClick={() => {
                    props.signup();
                  }}
                >
                  {props.t("want_signup", { ns: "login" })}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        )}
      </Formik>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.errors,
  isLoading: state.auth.loading,
});

const mapActionsToProps = {
  loginUser,
  clearErrors,
};

export default connect(mapStateToProps, mapActionsToProps)(SigninForm);
