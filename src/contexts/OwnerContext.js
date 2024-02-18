import React, { createContext, useEffect, useState } from "react";

const initialState = {
  email: "contact@nttdata.com",
  phone: "+3 9876 765 444",
  socialMedias: {
    linkedin: {
      logo: "/static/img/socialMedia/linkedin.svg",
      url: "https://www.linkedin.com/company/ntt-data-business-solutions-turkey/?originalSubdomain=tr",
    },
    instagram: {
      logo: "/static/img/socialMedia/instagram.svg",
      url: "https://www.instagram.com/ndbs_turkiye/",
    },
    facebook: {
      logo: "/static/img/socialMedia/facebook.svg",
      url: "https://www.facebook.com/NTTDATABusinessSolutionsTurkey",
    },
  },
};

const OwnerContext = createContext(initialState);

const OwnerProvider = ({ children }) => {
  const [ownerState] = useState(initialState);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, []);

  return (
    <OwnerContext.Provider
      value={{
        ...ownerState,
      }}
    >
      {initialized && children}
    </OwnerContext.Provider>
  );
};

export { OwnerContext, OwnerProvider };
