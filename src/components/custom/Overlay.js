import * as React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { apiState } from "../../redux/slices/apiSlice";
import BoxComp from "../core/Box";
import CircularProgress from "@mui/material/CircularProgress";

const OverlayBox = styled(BoxComp)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default function OverlayComp() {
  const { loading } = useSelector(apiState);

  return (
    loading && (
      <OverlayBox>
        <CircularProgress />
      </OverlayBox>
    )
  );
}
