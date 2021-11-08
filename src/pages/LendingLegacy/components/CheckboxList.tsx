import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

export default function CheckboxList ({ listItems, ...props }: {listItems: any}) {
  const [checked, setChecked] = React.useState<any>([])

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List>
      {listItems.map((item: any) => {
        const labelId = `checkbox-list-label-${item}`

        return (
          <ListItem key={item.id} onClick={handleToggle(item.id)}>
            <ListItemIcon>
              <Checkbox
                color='primary'
                edge='start'
                checked={checked.indexOf(item.id) !== -1}
                tabIndex={-1}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.label} />
          </ListItem>
        )
      })}
    </List>
  )
}
