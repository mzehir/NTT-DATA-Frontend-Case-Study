import  { useContext } from "react";
import { OwnerContext } from "../contexts/OwnerContext";

const OwnerUseContext = () => {
  const context = useContext(OwnerContext);

  if (!context)
    throw new Error("OwnerContext must be placed within OwnerProvider");

  return context;
};

export default OwnerUseContext;
