import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <BlogCard />
                </Grid>
                <Grid item md={4}>
                    <BlogCard />
                </Grid>
                <Grid item md={4}>
                    <BlogCard />
                </Grid>
                <Grid item md={4}>
                    <BlogCard />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Blog