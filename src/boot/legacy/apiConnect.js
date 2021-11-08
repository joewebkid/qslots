import cookie from "react-cookies";

// export const urlAuth = 'http://84.201.161.76:5001'

// export const urlAuth = "https://platform.qsolts.com/api";
export const urlAuth = "https://test.dev.qsolts.com/api2";

// export const urlAuth = 'http://0.0.0.0:5001'

export function ApiConnect(props) {
  const strAuthorization = cookie.load("access_token");

  const getData = (url, setterEssence, setterLoading) => {
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: strAuthorization,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          props.isLogin(false);
        }
        return response.json();
      })
      .then((temp) => {
        setterEssence(temp);
        props.clickHandle &&
          props.clickHandle(
            temp.code === 200
              ? "success"
              : temp.code < 300
              ? "warning"
              : "error",
            temp.msg
          );
        if (setterLoading) {
          setterLoading(true);
        }
      });
  };

  const getDataPost = (url, objToGet, setterEssence, setterLoader) => {
    fetch(url, {
      method: "post",
      body: JSON.stringify(objToGet),
      headers: new Headers({
        Authorization: strAuthorization,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          props.isLogin(false);
        }
        return response.json();
      })
      .then((temp) => {
        if (setterLoader) {
          setterLoader(true);
        }
        props.clickHandle &&
          props.clickHandle(
            temp.code === 200
              ? "success"
              : temp.code < 300
              ? "warning"
              : "error",
            temp.msg
          );
        if (setterEssence) {
          setterEssence(temp);
        }
      });
  };

  const createData = (url, objToCreate) => {
    fetch(url, {
      method: "post",
      body: JSON.stringify(objToCreate),
      headers: new Headers({
        Authorization: strAuthorization,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          props.isLogin(false);
        }
        return response.json();
      })
      .then((temp) => {
        props.clickHandle(
          temp.msg.indexOf("спешно") !== -1 ? "success" : "error",
          temp.msg
        );
      });
  };

  const deleteDate = (url, objToDelete) => {
    fetch(url, {
      method: "delete",
      body: JSON.stringify(objToDelete),
      headers: new Headers({
        Authorization: strAuthorization,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          props.isLogin(false);
        }
        return response.json();
      })
      .then((temp) => {
        props.clickHandle(
          temp.msg.indexOf("спешно") !== -1 ? "success" : "error",
          temp.msg
        );
      });
  };

  const updateDate = (url, objToCreate) => {
    fetch(url, {
      method: "put",
      body: JSON.stringify(objToCreate),
      headers: new Headers({
        Authorization: strAuthorization,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          props.isLogin(false);
        } else if (response.status !== 200) {
          if (props.clickHandle) {
            props.clickHandle("error", "Что-то с бэкендом");
          } else {
            props.isLogin(false);
          }
        }
        return response.json();
      })
      .then((temp) => {
        props.clickHandle &&
          props.clickHandle(
            temp.code === 200
              ? "success"
              : temp.code < 300
              ? "warning"
              : "error",
            temp.msg
          );
      })
      .catch(() => {
        props.clickHandle("error", "Запрос не выполнен");
      });
  };

  if (props.name === "getData") {
    return getData(props.url, props.setterEssence, props.setterLoading);
  }
  if (props.name === "getDataPost") {
    return getDataPost(
      props.url,
      props.objToGet,
      props.setterEssence,
      props.setterLoading
    );
  }
  if (props.name === "createData") {
    return createData(props.url, props.objToCreate);
  }
  if (props.name === "deleteDate") {
    return deleteDate(props.url, props.objToDelete);
  }
  if (props.name === "updateDate") {
    return updateDate(props.url, props.objToUpdate);
  }
  return "";
}
