import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

export default function RadioList ({ listItems, ...props }: {listItems: any}) {
  const [value, setValue] = React.useState(listItems[1].id)

  return (
    <FormControl component='fieldset'>
      <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
        {listItems.map((item: any) => {
          return (
            <FormControlLabel
              value={item.id}
              color='primary'
              control={<Radio color='primary' />}
              label={item.label}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}
