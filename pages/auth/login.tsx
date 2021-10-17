import React from "react";
import Navfull from "../../components/Navbar";

import LoginAuth from "../../components/Auth/Login";

const login = () => {
   return (
      <>
         <Navfull />

         <LoginAuth />
      </>
   );
};

export default login;
