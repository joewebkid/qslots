import { wrapperUnitPay } from '@boot/legacy/unipay'

export default ({ user, toSuccess }: {user: any, toSuccess: any}) => {
  const dialog = document.getElementById('dialogId')
  if (dialog) dialog.children[2].removeAttribute('tabIndex')
  const UnitPay = wrapperUnitPay()

  var payment = new UnitPay()
  payment.createWidget({
    publicKey: '363101-a616f',
    sum: user.sum_payment,
    domainName: 'unitpay.ru',
    locale: 'ru',
    account: user.account,
    desc: user.desc,
    signature: user.signature
  })
  payment.success(function () {
    toSuccess()
  })
  payment.error(function () {})
}
