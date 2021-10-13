import React from "react";
import Navfull from "../../Components/Navbar";

import Auth from "../../Components/Auth";

const login = () => {
   return (
      <>
         <Navfull />

         <Auth elements={["email", "password"]} />
      </>
   );
};

export default login;
