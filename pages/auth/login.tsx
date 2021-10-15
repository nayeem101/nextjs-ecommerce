import React from "react";
import Navfull from "../../Components/Navbar";

import Auth from "../../Components/Auth";

const loginEl = { email: "", password: "" }

const login = () => {
   return (
      <>
         <Navfull />

         <Auth elements={loginEl} />
      </>
   );
};

export default login;
