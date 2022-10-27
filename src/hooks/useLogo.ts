import { useState } from "react";
import GOOGLE from "assets/companyLogoImg/GOOGLE_LOGO.png";
import BANK_SAL from "assets/companyLogoImg/bank_sal.png";
import MIDAS from "assets/companyLogoImg/midas_logo.png";
// import BASIC from "assets/companyLogoImg/basics.png";

const useLogo = () => {
  const [logoLists, setLogoLists] = useState([
    "https://static.toss.im/tds/favicon/favicon-196x196.png",
    MIDAS,
    // GOOGLE,
    // BANK_SAL,
  ]);
  return { logoLists };
};

export default useLogo;
