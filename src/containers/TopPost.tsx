import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
const TopPost = () => {
  return (
    <Box sx={{ 
        width: '100%'
    }}>
          <Typography variant="h4" component="div">
            Leader Board
          </Typography>
          <List>
              <ListItem>
                  <Typography gap={3} variant="h5">
                      1
                  </Typography>
                  <Typography variant="h6">
                      first
                  </Typography>
              </ListItem>
          </List>
    </Box>
  );
}

export default TopPost