import React from 'react'
import { Grid, Container, Stack } from '@mui/material'

import BlogCard from '../containers/BlogCard'
import Search from '../containers/Search'
import TopPost from '../containers/TopPost'

const BlogAll = () => {
    return (
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item md={4}>
                <Stack spacing={2}>
                    <Search />
                    <TopPost />
                </Stack>
                </Grid>
                <Grid item md={8}>
                   <Grid container spacing={3}>
                        <Grid item md={6}>
                            <BlogCard />
                        </Grid>    
                        <Grid item md={6}>
                            <BlogCard />
                        </Grid>    
                        <Grid item md={6}>
                            <BlogCard />
                        </Grid>    
                        <Grid item md={6}>
                            <BlogCard />
                        </Grid>    
                    </Grid> 
                </Grid>
            </Grid>
        </Container>            


    )
}

export default BlogAll