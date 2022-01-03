import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BlogSingle = () => {
  return (
    <Container fixed>
        <Typography variant="h1">
            Lizard
        </Typography>
        <Typography variant="subtitle1" mb={3}>
            John Doe
        </Typography>
        <img width="100%" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcloudcommercepro.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fblog-banner.png&f=1&nofb=1" alt="Blog banner" />
        <Typography variant="body1" mt={3} textAlign='center'>
            Hello
        </Typography>
    </Container>
  );
}

export default BlogSingle