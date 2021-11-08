import React, { useState, useEffect, useContext } from "react";
//
import { ThemeProvider } from "@material-ui/core/styles";
//
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import { useSnackbar } from "notistack";

import LandingPage from "./LandingPage";

import DialogHello from "./DialogHello";
import CustomizedDialogs from "./components/Dialog";
import DialogSigin from "./DialogSigin";
//
import { ApiConnect, urlAuth } from "@boot/legacy/apiConnect";
import Context from "@boot/legacy/context";
//
// import theme from '../../boot/CreateTheme'
import DialogPay from "./DialogPay";
import { Lending } from "./components";
import { useDispatch } from "react-redux";
import { setTokenAction } from "@core/store/actions";
import { withCheckAuth } from "@core/HOCs";
import { User } from "@core/types/user";
import { ROUTES } from "@core/routing";
import { Company } from "@core/types/company";
function LendingComponent(...props: any) {
  const dispatch = useDispatch();

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const snackBar = (variant: any, msg: any) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(msg, {
      variant,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  };
  const [isDrawer, setIsDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMain, setOpenMain] = useState(false);
  const [openSigin, setOpenSigin] = useState(false);
  const [step, setStep] = useState(0);
  const [openBackDrop, setOpenBackDrop] = useState("init"); // Если б
  const [companies, setCompanies] = useState<Company[]>([]); // Список компаний
  const [user, setUser] = useState<User>();
  const magicNotCourse = "Тестов на руках нет, есть только догадки";
  const magicGoodCourse = "Курс сформирован";
  useEffect(() => {
    user && autoCompleteIdByLabel();
  }, [user]);

  useEffect(() => {
    user && (user.showPassword = false);
  }, [step]);

  useEffect(() => {
    const initUser = {
      company_label: undefined,
      company_id: undefined,
      link:
        "https://etest.talent-q.ru/assessmentstart?id=55abfefe-a91f-448e-97bb-96ebc8efec37",
      textMail:
        "Вы приглашаетесь зайти в Систему Talent Q и выполнить следующие упражнения:Тест «Вербальные Элементы» оценивает умение понимать смысл текстовых фрагментов и делать выводы. В этом тесте 15 вопросов,  он сопровождается серией примеров, позволяющих ознакомиться с правилами работы с тестом.  Время на вопросы теста ограничено, поэтому, прежде чем приступить к работе, удостоверьтесь, что у Вас есть 15 минут времени, во время которых Вы не будете прерываться.Тест «Числовые Элементы» оценивает способность делать выводы из числовой информации, представленной в таблицах и графиках. Тест состоит из 12 вопросов и сопровождается серией примеров, позволяющих ознакомиться с правилами работы с тестом. Время на вопросы теста ограничено, поэтому, прежде чем приступить к работе, удостоверьтесь, что у Вас есть 15 минут времени, во время которых Вы не будете прерываться. Подготовьте также заранее калькулятор и черновик.",
      email: "",
      password: "",
      passwordShow: false,
      passwordRetry: "",
      passwordRetryShow: false,
      course_id: "",
      name: "",
      phone: "",
      code: "",
      id: "",
      account: "",
      desc: "",
      policy: false,
      secret_key: "",
      signature: "",
      sum_payment: "",
      test_system: {},
      test_subsystem: {},
      tests: [],
      textData: [],
    };
    setUser(initUser);
  }, [open]);

  /**
   * Номера шагов и их описание
   * @argument {step: number}
   * 0 - Выбор компании
   * 1 - Ввод ссылки
   * 2 - Ввод текста письма (хук на загрузку курса)
   * 3 - Приглашение для прохождения регистрации (если нет то появляется отсыл нахер)
   * 4 - Начало регистрации, поле для ввода телефона
   * 5 - Поле для ввода кода телефона
   * 6 - Ввод пароля
   * 7 - Представление, ввод имени
   * 8 - Переход на оплату
   */

  const nextStep = () => {
    switch (step) {
      case 3: // Формирование курса
        getInputTest();
        break;
      case 5: // Отправка кода на телефон клиента
        checkUser();
        // getMobileCode()
        // setStep(step + 1)
        break;
      case 6: // Проверка кода пользователя
        postMobileCode();
        // setStep(step + 1)
        break;
      case 7: // Проверка кода пользователя
        checkPassword();
        // setStep(step + 1)
        break;
      case 8: // Проверк на регистрацию
        // registration()
        // getPayload()
        updateNameUser();
        getPayload();

        // setStep(step + 1)
        break;
      case 9:
        getPayload();
        break;
      default:
        setStep(step + 1);
        break;
    }
  };

  const autoCompleteIdByLabel = (id = "") => {
    user!.company_id = id
      ? id
      : companies.find((obj) => obj.label === user!.company_label)?.id;
  };

  const updateNameUser = () => {
    ApiConnect({
      name: "updateDate",
      url: urlAuth + "/user/",
      objToUpdate: { name: user?.name },
      setterEssence: null,
      clickHandle: null,
      setterLoading: null,
    });
  };
  const getPayload = () => {
    ApiConnect({
      name: "getData",
      url:
        urlAuth + `/payment/create/?course_id=${user!.course_id}&type=course`,
      setterEssence: (temp: any) => {
        if (temp?.code === 200) {
          setUser({ ...user, ...temp?.obj });
          DialogPay({
            user: { ...user, ...temp?.obj },
            toSuccess: toGoAuth,
          });
        }
      },
      clickHandle: snackBar,
      setterLoading: null,
    });
  };

  const registration = () => {
    // if (user.name.length === 0) {
    //   snackBar('warning', 'Укажите пожалуйста Ваше имя')
    //   return
    // }
    // name: user.name,
    ApiConnect({
      name: "getDataPost",
      url: urlAuth + "/user/registration/",
      objToGet: { password: user!.password },
      setterEssence: (temp: any) => {
        if (temp.code < 300) {
          openBackDrop !== magicNotCourse ? setStep(step + 1) : toGoAuth();
          // openBackDrop !== magicNotCourse ? getPayload() : toGoAuth()
        }
      },
      clickHandle: snackBar,
      setterLoading: null,
    });
  };
  /**
   * Метод для проверки паролей
   */
  const checkPassword = () => {
    if (user!.password === user!.passwordRetry) {
      if (user!.password.length === 0) {
        snackBar("warning", "Пароль не может быть пустым");
        return;
      }
      registration();
      // setStep(step + 1)
      return;
    }
    snackBar("warning", "Пароли не совпадают");
  };
  /**
   * Метод отправки кода подтверждения
   */
  const postMobileCode = () => {
    ApiConnect({
      name: "getData",
      url: urlAuth + `/user/registration/check_code/?code=${user!.code}`,
      setterEssence: (temp: any) => {
        if (temp?.code === 200) {
          setStep(step + 1);
        }
      },
      clickHandle: snackBar,
      setterLoading: null,
    });
  };

  const checkUser = () => {
    let decPhone = user!.phone
      .match(/([0-9]*)/g)!
      .reduce((res, str) => (res += str), "");
    ApiConnect({
      name: "getData",
      url: urlAuth + `/user/registration/check_user/?mobile_phone=${decPhone}`,
      setterEssence: (temp: any) => {
        if (temp?.code === 200) {
          snackBar("success", temp?.msg);
          setOpenMain(false);
          setOpenSigin(true);
        } else {
          getMobileCode();
        }
      },
      setterLoading: null,
    });
  };
  /**
   * Метод отправки кода подтверждения на телефон клиента
   */
  const getMobileCode = () => {
    let decPhone = user!.phone
      .match(/([0-9]*)/g)!
      .reduce((res, str) => (res += str), "");
    ApiConnect({
      name: "getData",
      url: urlAuth + `/user/registration/send_code/?mobile_phone=${decPhone}`,
      setterEssence: (temp: any) => {
        if (temp?.code === 200) {
          setStep(step + 1);
        }
      },
      setterLoading: null,
    });
  };
  /**
   * Метод для формирования курса
   */
  const getInputTest = () => {
    setOpenBackDrop("");
    const imputTest = {
      id: user!.company_id,
      link_text: user!.link,
      mail_text: user!.textMail,
    };
    ApiConnect({
      name: "getDataPost",
      url: urlAuth + "/user/entrance_test/",
      objToGet: imputTest,
      setterEssence: (temp: any) => {
        setUser({
          ...user,
          ...temp?.obj,
          // ...temp?.obj?.server_data,
          // textData: temp?.obj?.text_data,
          // redirect_url: temp?.obj?.redirect_url
        });
        if (temp?.obj?.action === "registration")
          // setOpenBackDrop('Невозможно определить тест.')
          setOpenBackDrop(magicNotCourse);
        else if (temp?.obj?.action === "course")
          setOpenBackDrop(magicGoodCourse);
        else if (temp?.obj?.action === "redirect")
          setOpenBackDrop(temp?.obj?.msg);
        // if (
        //   temp?.msg === magicGoodCourse ||
        //   temp?.msg.includes('Невозможно определить тест.')
        // )
        //   setOpenBackDrop(temp?.msg)
        // else setOpenBackDrop(magicNotCourse)
        setIsDrawer(true);
        setStep(step + 1);
      },
      setterLoading: null,
    });
  };

  /**
   * Метод для получения списка компаний
   */
  const getListCompanies = () => {
    ApiConnect({
      name: "getData",
      url: urlAuth + "/user/entrance_test/company_list/",
      setterEssence: (temp: any) => {
        if (temp?.obj?.companies) {
          setCompanies(temp?.obj?.companies);
        }
      },
      setterLoading: null,
    });
  };

  /**
   * Метод для создания новой компании передается через контекст
   * @param {string} newLabel
   */
  const addNewCompany = (newLabel: any) => {
    const newCompany: Company = {
      id: uuidv4(),
      name: "company" + new Date().valueOf(),
      label: newLabel,
    };
    autoCompleteIdByLabel(newCompany.id);
    ApiConnect({
      name: "getDataPost",
      url: urlAuth + "/user/entrance_test/company_list/",
      objToGet: newCompany,
      setterEssence: (temp: any) => {
        getListCompanies();
      },
      setterLoading: null,
    });
  };

  useEffect(() => {
    if (openMain === false) {
      setOpen(false);
      setStep(0);
      setOpenBackDrop("init");
    }
    if (openMain) {
      ApiConnect({
        name: "getDataPost",
        url: urlAuth + "/user/guest/",
        objToGet: { id: uuidv4() },
        setterEssence: (temp: any) => {
          if (temp?.obj?.token && temp?.obj?.id) {
            setUser({ ...user!, id: temp?.obj?.id });
            cookie.save("access_token", temp?.obj?.token, {});
            getListCompanies();
          }
        },
        setterLoading: null,
      });
    }
  }, [openMain]);

  const toGoAuth = () => {
    let decPhone = user!.phone
      .match(/([0-9]*)/g)!
      .reduce((res, str) => (res += str), "");

    ApiConnect({
      name: "getDataPost",
      url: urlAuth + `/user/auth/login/`,
      objToGet: { mobile_phone: decPhone, password: user!.password },
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
    <Context.Provider
      value={{ user, setUser, companies, addNewCompany, setOpenMain }}
    >
      {/* <Header setOpen={setOpen} setOpenSigin={setOpenSigin} /> */}
      {/* <ThemeProvider theme={theme}> */}
      <CustomizedDialogs
        {...{
          step,
          nextStep,
          openBackDrop,
          setStep,
          magicNotCourse,
          isDrawer,
          magicGoodCourse,
        }}
        open={openMain}
        setIsDrawer={setIsDrawer}
        setOpen={setOpenMain}
      />

      <DialogHello
        {...{
          openMain,
          setOpenMain,
          open,
          setOpen,
          setOpenBackDrop,
          setStep,
          magicNotCourse,
        }}
        // openMain={openMain}
        // setOpenMain={setOpenMain}
        // open={open}
        // setOpen={setOpen}
        // setOpenBackDrop={setOpenBackDrop}
        // set
      />
      <DialogSigin open={openSigin} setOpen={setOpenSigin} />
      {/* </ThemeProvider> */}
      {/* <ContentMain /> */}
      {/* <Lending /> */}
      <LandingPage setOpen={setOpen} setOpenSigin={setOpenSigin} />
    </Context.Provider>
  );
}

export const LendingPage = withCheckAuth(LendingComponent);
