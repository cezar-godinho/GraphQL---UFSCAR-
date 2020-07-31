import React from 'react';
import { Box, Typography } from '@material-ui/core';
import empty from '../../assets/empty.gif';


const EmptyResult = () => {

  return (
    <Box>
      <Typography variant="body1">Busque por alguem!</Typography>
      <img src={empty} />
    </Box>
  
  )
}

export default EmptyResult;