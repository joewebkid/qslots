import React, { useContext } from 'react'
//
import Button from '@material-ui/core/Button'
//
import { Typography } from '@material-ui/core'
import Context from '@boot/legacy/context'

const DialogActionContent = ({
  nameAttr,
  isDisBtn = true,
  cntBtn,
  actionBtn,
  actionTime
}) => {
  const { user } = useContext(Context)

  // actionTime && actionTime()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexGrow: 1
      }}
    >
      <Button
        autoFocus
        variant='text'
        color={'primary'}
        style={{ padding: '10px 24px', marginBottom: 55 }}
        size='large'
        disabled={isDisBtn}
        //  && !(user[nameAttr] && user[nameAttr].length)}
        onClick={actionBtn}
      >
        <Typography
          variant='body2'
          color={
            isDisBtn
              ? //  && !(user[nameAttr] && user[nameAttr].length)
                'default'
              : 'primary'
          }
        >
          {cntBtn}
        </Typography>
      </Button>
    </div>
  )
}

export default DialogActionContent
