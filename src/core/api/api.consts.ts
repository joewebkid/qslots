// export const API_BASE_PATH = 'https://platform.qsolts.com/api';
export const API_BASE_PATH = "https://test.dev.qsolts.com/api2";

export enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export const MESSAGES = {
  SIGNIN_FAIL_MESSAGE:
    "Что то пошло не так!\nПроверьте правильность введенных данных.",
  PROFILE_CHANGE_SUCCESS_MESSAGE: "Данные успешное обновлены!",
  PROFILE_CHANGE_FAIL_MESSAGE:
    "Не удалось обновить данные.\nЧто то пошло не так!",
  FAIL_MESSAGE_500_DEFAULT: "Ошибка сервера!",
  FAIL_MESSAGE_DEFAULT: "Что то пошло не так!",
};
