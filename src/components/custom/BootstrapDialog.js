import React from "react";
import { styled } from "@mui/material/styles";
import {
  DialogComp,
  DialogTitleComp,
  DialogContentComp,
  DialogActionsComp,
} from "../core/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

//***************BootstrapDialog***************\\
export const BootstrapDialog = styled(DialogComp)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

//***************BootstrapDialogTitle***************\\
export const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitleComp sx={{ m: 0, p: 2 }} {...other}>
      {children}

      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitleComp>
  );
};

//***************BootstrapDialogContent***************\\
export const BootstrapDialogContent = (props) => {
  const { children, ...other } = props;

  return (
    <DialogContentComp dividers {...other}>
      {children}
    </DialogContentComp>
  );
};

//***************BootstrapDialogActions***************\\
export const BootstrapDialogActions = (props) => {
  const { children, ...other } = props;

  return <DialogActionsComp {...other}>{children}</DialogActionsComp>;
};
