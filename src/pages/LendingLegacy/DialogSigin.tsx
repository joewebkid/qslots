import React, { useContext, useState, useEffect } from "react";
//
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Divider,
  Modal,
  Grid,
  Typography,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
//
import { useSnackbar } from "notistack";
import cookie from "react-cookies";
//
import DialogMainContent from "./components/dialogComponents/DialogMainContent";
import { ApiConnect, urlAuth } from "@boot/legacy/apiConnect";
import { useHistory } from "react-router-dom";
//
import Context from "@boot/legacy/context";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import ru from "react-phone-input-2/lang/ru.json";
import { ROUTES } from "@core/routing";
import { useDispatch } from "react-redux";
import { setTokenAction } from "@core/store/actions";
/**
 * Компонент который возвращает приветсвтвенный диалог
 */
const DialogSigin = ({ open, setOpen }: { open: any; setOpen: any }) => {
  const dispatch = useDispatch();

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const snackBar = (variant: any, msg: string) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(msg, {
      variant,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  };

  const { user, setUser } = useContext(Context);

  const templateMainContent = (props: any) => {
    return (
      <div
        key="dialog-signin-content"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "0px 24px",
        }}
      >
        {props}
      </div>
    );
  };

  const onChangeValuePhone = (value: any) => {
    let tempUser = user;
    tempUser["phone"] = value;
    setUser({ ...tempUser });
  };

  const templateMainContentLabelText = (props: any) => {
    return <DialogMainContent key="login-popup-main-content" {...props} />;
  };

  const toGoAuth = () => {
    let decPhone = user.phone
      .match(/([0-9]*)/g)
      .reduce((res: string, str: string) => (res += str), "");

    ApiConnect({
      name: "getDataPost",
      url: urlAuth + `/user/auth/login/`,
      objToGet: { mobile_phone: decPhone, password: user.password },
      setterEssence: (temp: any) => {
        if (temp?.code === 200) {
          cookie.save("access_token", temp?.obj?.token, {});
          dispatch(setTokenAction(temp?.obj?.token));
          history.push(ROUTES.COURSE.path);
          // history.go(ROUTES.COURSE.path);
        } else {
          snackBar("error", temp.msg);
        }
      },
      clickHandle: null,
      setterLoading: null,
    });
  };

  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      id={"dialogId"}
      PaperProps={{ tabIndex: 1 }}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle style={{ textAlign: "center" }}>
        {"Добро пожаловать"}
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          style={{ display: "flex", margin: "0 24px", width: "auto" }}
        >
          <PhoneInput
            containerStyle={{
              display: "flex",
              // flexGrow: 1,
              margin: 4,

              boxSizing: "border-box",
            }}
            country={"ru"}
            value={user?.phone}
            placeholder={"Ваш номер телефона"}
            localization={ru}
            specialLabel=""
            onChange={(value) => onChangeValuePhone(value)}
          />
        </Grid>
        {templateMainContent([
          // templateMainContentLabelText({
          //   placeholder: 'Ваш номер телефона',
          //   nameAttr: 'phone',
          //   typeInput: 'textPhone'
          // }),
          templateMainContentLabelText({
            nameAttr: "password",
            typeInput: "textBoxPassword",
            placeholder: "Ваш пароль",
          }),
        ])}
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          autoFocus
          variant="contained"
          color="primary"
          size="large"
          style={{ padding: "20px 60px" }}
          onClick={(e) => {
            toGoAuth();
          }}
        >
          <Typography variant="body1">{"Авторизоваться"}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogSigin;
