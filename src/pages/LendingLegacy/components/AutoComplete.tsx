import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete'
import Context from '@boot/legacy/context'

const filter = createFilterOptions()

export default function FreeSoloCreateOption ({ value, setValue }: {value: any, setValue: any}) {
  const { companies, addNewCompany } = useContext(Context)
  return (
    <Autocomplete
      value={value ? { label: value } : null}
      onChange={(event, newValue: any) => {
        if (typeof newValue === 'string') {
          setValue(newValue)
        } else if (newValue && newValue.inputValue) {
          addNewCompany(newValue.inputValue)
          setValue(newValue.inputValue)
        } else if (newValue && newValue.label) {
          setValue(newValue.label)
        } else {
          setValue(null)
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            label: `${params.inputValue}`
          })
        }

        return filtered
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={companies}
      getOptionLabel={option => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue
        }
        // Regular option
        return option.label
      }}
      renderOption={option => option.label}
      style={{ flexGrow: 1, display: 'flex' }}
      freeSolo
      renderInput={params => (
        <TextField
          {...params}
          placeholder={'Ваша компания'}
          variant='outlined'
        />
      )}
    />
  )
}
