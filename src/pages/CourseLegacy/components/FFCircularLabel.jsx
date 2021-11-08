import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

export default function FFCircularLabel ({ children, ...props }) {
  return (
    <Box position='relative' display='inline-flex' id="r">
      <CircularProgress variant='determinate' {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        {children}
      </Box>
    </Box>
  )
}
