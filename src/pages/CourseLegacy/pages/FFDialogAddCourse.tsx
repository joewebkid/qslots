import React, { useState, useEffect, useContext } from 'react'
//
//
import { v4 as uuidv4 } from 'uuid'
//
import CustomizedDialogs from './dialogAdd/Wrapper'
//
import { ApiConnect, urlAuth } from '@boot/legacy/apiConnect'
import Context from '@boot/legacy/context'
import { GetPayload } from './dialogAdd/utils'
//

export default function App ({ open, ...props }: {open: any}) {
  const [isDrawer, setIsDrawer] = useState(false)
  const [openMain, setOpenMain] = useState(true)
  const [step, setStep] = useState(0)
  const [openBackDrop, setOpenBackDrop] = useState('init') // Если б
  const [companies, setCompanies] = useState<any>([]) // Список компаний
  const [user, setUser] = useState<any>(null)
  const magicNotCourse = 'Тестов на руках нет, есть только догадки'
  const magicGoodCourse = 'Курс сформирован'
  useEffect(() => {
    user && autoCompleteIdByLabel()
  }, [user])

  useEffect(() => {
    const initUser: any = {
      company_label: null,
      company_id: null,
      link:
        'https://etest.talent-q.ru/assessmentstart?id=55abfefe-a91f-448e-97bb-96ebc8efec37',
      textMail:
        'Вы приглашаетесь зайти в Систему Talent Q и выполнить следующие упражнения:Тест «Вербальные Элементы» оценивает умение понимать смысл текстовых фрагментов и делать выводы. В этом тесте 15 вопросов,  он сопровождается серией примеров, позволяющих ознакомиться с правилами работы с тестом.  Время на вопросы теста ограничено, поэтому, прежде чем приступить к работе, удостоверьтесь, что у Вас есть 15 минут времени, во время которых Вы не будете прерываться.Тест «Числовые Элементы» оценивает способность делать выводы из числовой информации, представленной в таблицах и графиках. Тест состоит из 12 вопросов и сопровождается серией примеров, позволяющих ознакомиться с правилами работы с тестом. Время на вопросы теста ограничено, поэтому, прежде чем приступить к работе, удостоверьтесь, что у Вас есть 15 минут времени, во время которых Вы не будете прерываться. Подготовьте также заранее калькулятор и черновик.',
      email: '',
      password: '',
      passwordShow: false,
      passwordRetry: '',
      passwordRetryShow: false,
      course_id: '',
      name: '',
      phone: '',
      code: '',
      id: '',
      account: '',
      desc: '',
      policy: false,
      secret_key: '',
      signature: '',
      sum_payment: '',
      test_system: {},
      test_subsystem: {},
      tests: [],
      textData: []
    }
    setUser(initUser)
  }, [openMain])

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
        getInputTest()
        break
      case 4:
        GetPayload(user?.course_id)
        break
      default:
        setStep(step + 1)
        break
    }
  }

  const autoCompleteIdByLabel = (id = '') => {
    user.company_id = id
      ? id
      : companies.find((obj: any) => obj.label === user.company_label)?.id
  }

  const getInputTest = () => {
    setOpenBackDrop('')
    const imputTest = {
      id: user.company_id,
      link_text: user.link,
      mail_text: user.textMail
    }
    ApiConnect({
      name: 'getDataPost',
      url: urlAuth + '/user/entrance_test/',
      objToGet: imputTest,
      setterEssence: (temp: any) => {

        setUser({
          ...user,
          ...temp?.obj
          // .server_data,
          // textData: temp?.obj?.text_data,
          // redirect_url: temp?.obj?.redirect_url
        })
        if (temp?.obj?.action === 'registration')
          // setOpenBackDrop('Невозможно определить тест.')
          setOpenBackDrop(magicNotCourse)
        else if (temp?.obj?.action === 'course')
          setOpenBackDrop(magicGoodCourse)
        else if (temp?.obj?.action === 'redirect')
          setOpenBackDrop(temp?.obj?.msg)
        // if (
        //   temp?.msg === magicGoodCourse ||
        //   temp?.msg.includes('Невозможно определить тест.')
        // )
        //   setOpenBackDrop(temp?.msg)
        // else setOpenBackDrop(magicNotCourse)
        setIsDrawer(true)
        setStep(step + 1)
      },
      setterLoading: null
    })
  }

  /**
   * Метод для получения списка компаний
   */
  const getListCompanies = () => {
    ApiConnect({
      name: 'getData',
      url: urlAuth + '/user/entrance_test/company_list/',
      setterEssence: (temp: any) => {
        if (temp?.obj?.companies) {
          setCompanies(temp?.obj?.companies)
        }
      },
      setterLoading: null
    })
  }

  /**
   * Метод для создания новой компании передается через контекст
   * @param {string} newLabel
   */
  const addNewCompany = (newLabel: any) => {
    const newCompany = {
      id: uuidv4(),
      name: 'company' + new Date().valueOf(),
      label: newLabel
    }
    autoCompleteIdByLabel(newCompany.id)
    ApiConnect({
      name: 'getDataPost',
      url: urlAuth + '/user/entrance_test/company_list/',
      objToGet: newCompany,
      setterEssence: () => {
        getListCompanies()
      },
      setterLoading: null
    })
  }

  useEffect(() => {
    if (openMain === false) {
      // setOpen(false)
      setStep(0)
      setOpenBackDrop('init')
    }
    if (openMain) {
      getListCompanies()
    }
  }, [openMain])

  return (
    <Context.Provider
      value={{ user, setUser, companies, addNewCompany, setOpenMain }}
    >
      <CustomizedDialogs
        {...{
          step,
          nextStep,
          openBackDrop,
          setStep,
          magicNotCourse,
          isDrawer,
          magicGoodCourse
        }}
        open={openMain}
        setIsDrawer={setIsDrawer}
        setOpen={setOpenMain}
      />
    </Context.Provider>
  )
}
