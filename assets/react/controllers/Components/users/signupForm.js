import React from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { registerUser, clearErrors } from "./../../redux/actions/UserActions";
import Copyright from "../Copyright";
import { Formik } from "formik";
import {
  Typography,
  Alert,
  AlertTitle,
  Stack,
  TextField,
  Link,
  Box,
  Grid,
  styled,
  Avatar,
  debounce,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CONSTANTS from "../../../utils/Constants";

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

const SignupForm = (props) => {
  const location = useLocation();
  const from = location.state?.from || "/";
  let navigate = useNavigate();

  const checkoutSchema = yup.object().shape({
    code_immatriculation: yup
      .string()
      .required(props.t("required", { ns: "login" }))
      .min(8, props.t("error_immatriculation_length", { ns: "login" }))
      .test(
        "code_immatriculation-exists",
        props.t("immatriculation_nexist", { ns: "login" }),
        async (value) => {
          const response = await fetch(
            `${CONSTANTS.BASE_URL}/api/open/immatriculation`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ code_immatriculation: value }),
            }
          );
          return response.status == 200;
        }
      ),
    username: yup.string().required(props.t("required", { ns: "login" })),
    plainPassword: yup
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
    email: yup
      .string()
      .email(props.t("error_email", { ns: "login" }))
      .required(props.t("required", { ns: "login" }))
      .test(
        "email-exists",
        props.t("email_exist", { ns: "login" }),
        async (value) => {
          const response = await fetch(`${CONSTANTS.BASE_URL}/api/open/email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: value }),
          });
          debounce()
          return response.status == 200;
        }
      ),
    confirm_email: yup
      .string()
      .oneOf([yup.ref("email"), null], "Does not match with email!")
      .email()
      .required(props.t("required", { ns: "login" })),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("plainPassword"), null], "Does not match with password!")
      .required(props.t("required", { ns: "login" })),
  });

  const initialValues = {
    code_immatriculation: "",
    username: "",
    email: "",
    plainPassword: "",
    confirm_email: "",
    confirm_password: "",
  };

  const handleFormSubmit = (data) => props.registerUser(data, navigate, from);

  return (
    <Box
      sx={{
        mb: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#359d38" }}>
        <PersonAddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {props.t("creating", { ns: "login" })}
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
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isValidating,
        }) => (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Field
              margin="normal"
              required
              fullWidth
              size="small"
              id="usercode_immatriculationname"
              label={props.t("code_immatriculation", { ns: "login" })}
              name="code_immatriculation"
              autoFocus
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.code_immatriculation}
              error={
                !!touched.code_immatriculation && !!errors.code_immatriculation
              }
              helperText={
                touched.code_immatriculation && errors.code_immatriculation
              }
            />
            <Field
              margin="normal"
              required
              fullWidth
              size="small"
              id="username"
              label={props.t("username", { ns: "login" })}
              name="username"
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
              id="email"
              label={props.t("email", { ns: "login" })}
              name="email"
              type="email"
              size="small"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <Field
              margin="normal"
              required
              fullWidth
              id="confirm_email"
              label={props.t("confirm_email", { ns: "login" })}
              name="confirm_email"
              type="email"
              size="small"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirm_email}
              error={!!touched.confirm_email && !!errors.confirm_email}
              helperText={touched.confirm_email && errors.confirm_email}
            />
            <Field
              margin="normal"
              required
              fullWidth
              name="plainPassword"
              label={props.t("password", { ns: "login" })}
              type="password"
              id="plainPassword"
              autoComplete="current-password"
              size="small"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.plainPassword}
              error={!!touched.plainPassword && !!errors.plainPassword}
              helperText={touched.plainPassword && errors.plainPassword}
            />
            <Field
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label={props.t("confirm_password", { ns: "login" })}
              type="password"
              id="confirm_password"
              autoComplete="current-password"
              size="small"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirm_password}
              error={!!touched.confirm_password && !!errors.confirm_password}
              helperText={touched.confirm_password && errors.confirm_password}
            />
            <LButton
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              loading={props.isLoading || isValidating}
            >
              <span>{props.t("signup", { ns: "login" })}</span>
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
                    props.signin();
                  }}
                >
                  {props.t("want_signin", { ns: "login" })}
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
  registerUser,
  clearErrors,
};

export default connect(mapStateToProps, mapActionsToProps)(SignupForm);
