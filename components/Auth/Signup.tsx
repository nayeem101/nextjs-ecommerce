import theme from "../../src/theme";
import InputField from "./InputField";

import Link from "next/link";

import { Box, Button, Typography, Link as MuiLink } from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
   email: Yup.string()
      .email("Invalid email")
      .required("Email cannot be empty!"),
   firstName: Yup.string()
      .min(3, "Name should be at least 3 letters")
      .required(),
   lastName: Yup.string()
      .min(3, "Name should be at least 3 letters")
      .required(),
   password: Yup.string()
      .min(6, "Password should at least 6 characters")
      .required("password is required"),
   //  confirmPassword: Yup.string()
   //     .min(6, "Password should at least 6 characters")
   //     .required("password is required"),
});

const SignupAuth = () => {
   const formik = useFormik({
      initialValues: {
         email: "",
         firstName: "",
         lastName: "",
         password: "",
         //  confirmPassword: "",
      },
      validationSchema: SignupSchema,
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
      },
   });
   return (
      <Box
         sx={{
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            width: 500,
            margin: "0 auto",
         }}
      >
         <form onSubmit={formik.handleSubmit}>
            <InputField
               label="Email Address"
               name="email"
               type="email"
               onChange={formik.handleChange}
               value={formik.values.email}
               error={formik.touched.email && formik.errors.email}
               helperText={formik.touched.email && formik.errors.email}
            />
            <InputField
               label="First Name"
               name="firstName"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.firstName}
               error={formik.touched.firstName && formik.errors.firstName}
               helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <InputField
               label="Last Name"
               name="lastName"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.lastName}
               error={formik.touched.lastName && formik.errors.lastName}
               helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <InputField
               label="Password"
               name="password"
               type="password"
               onChange={formik.handleChange}
               value={formik.values.password}
               error={formik.touched.password && formik.errors.password}
               helperText={formik.touched.password && formik.errors.password}
            />
            {/* <InputField
               label="Confirm Password"
               name="confirmPassword"
               type="password"
               value={formik.values.confirmPassword}
               onChange={formik.handleChange}
               error={
                  formik.touched.confirmPassword ||
                  formik.errors.confirmPassword
               }
               helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
               }
            /> */}
            <Button fullWidth variant="contained" color="primary" type="submit">
               Sign Up
            </Button>
         </form>

         <Typography
            variant="subtitle1"
            style={{ textAlign: "center", marginTop: theme.spacing(4) }}
         >
            Already have an account?
            <Link href="login">
               <MuiLink underline="hover" color="primary">
                  Login Here
               </MuiLink>
            </Link>
         </Typography>
      </Box>
   );
};

export default SignupAuth;
