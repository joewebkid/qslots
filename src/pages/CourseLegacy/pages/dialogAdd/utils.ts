import React, { useState, useEffect, useContext } from 'react'
//
//
// import { useHistory } from 'react-router-dom'
//
//
import { ApiConnect, urlAuth } from '@boot/legacy/apiConnect'
//
import DialogPay from '@pages/LendingLegacy/DialogPay'

const GetPayload = (course_id: any) => {
  //   const history = useHistory()

  const toGoHref = () => {
    // window.history.go('/course')
    // let a = document.createElement('a')
    // a.target = '_blank'
    // a.href = '/course'
    // a.click()
    // setTimeou t(() => a.click(), [0])
  }

  ApiConnect({
    name: 'getData',
    url: urlAuth + `/payment/create/?course_id=${course_id}&type=course`,
    setterEssence: (temp: any) => {
      if (temp?.code === 200) {
        DialogPay({ user: temp?.obj, toSuccess: toGoHref })
      }
    },
    clickHandle: null,
    setterLoading: null
  })
}

export { GetPayload }
