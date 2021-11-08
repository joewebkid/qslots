import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import mainLocale from '../apps/main/languages/index'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
//   en: {
//     translation: {
//       [mainLocale.prefix]: mainLocale.en,
//     //   [navbarLocale.prefix]: navbarLocale.en
//     }
//   },
  ru: {
    translation: {
      [mainLocale.prefix]: mainLocale.ru,
    //   [navbarLocale.prefix]: navbarLocale.ru
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru',
    keySeparator: false, // we do not use keys in form messages.welcome
    returnObjects: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
