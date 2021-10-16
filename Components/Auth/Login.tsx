import theme from "../../src/theme";
import InputField from "./InputField";

import Link from "next/link";

import { Box, Button, Typography, Link as MuiLink } from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object({
   email: Yup.string()
      .email("Invalid email")
      .required("Email cannot be empty!"),
   password: Yup.string()
      .min(6, "Password should at least 6 characters")
      .required("password is required"),
});

const LoginAuth = () => {
   const formik = useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: LoginSchema,
      onSubmit: () => console.log("form submited"),
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
               error={formik.touched.email || formik.errors.email}
               helperText={formik.touched.email && formik.errors.email}
            />
            <InputField
               label="Password"
               name="password"
               type="password"
               onChange={formik.handleChange}
               value={formik.values.password}
               error={formik.touched.password || formik.errors.password}
               helperText={formik.touched.password && formik.errors.password}
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
               Login
            </Button>
         </form>

         <Typography
            variant="subtitle1"
            style={{ textAlign: "center", marginTop: theme.spacing(4) }}
         >
            Don't have an account?
            <Link href="signup">
               <MuiLink underline="hover" color="primary">
                  Sign up here!
               </MuiLink>
            </Link>
         </Typography>
      </Box>
   );
};

export default LoginAuth;
