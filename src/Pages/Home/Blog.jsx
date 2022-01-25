import { Box, Container, Fab, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import img from '../../Images/image5.png'

const Blog = () => {
  return <>
  <Container sx={{mb:10}}>
  <Box>
      <Typography display="flex"  sx={{ justifyContent: 'center',color:'#20AEEF' }} >
            BLOG
      </Typography>
      <Typography display="flex"  sx={{ justifyContent: 'center', }} variant='h3'>
                  Disover our products 
        </Typography>
        <Typography display="flex"  sx={{ justifyContent: 'center', }} variant='h3'>
                  technologies and clients
        </Typography>
        <Box display="flex"  sx={{ justifyContent: 'center', }}>
                  <Fab
              variant="extended"
              size="small"
              sx={{
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#263238",
                },
                px: 3,
                mt: 3,
                border: '1px solid black'
              }}
            >
              Read all
            </Fab>
                  </Box>
  </Box>

 <Box display="flex"  sx={{ justifyContent: 'center',flexWrap: 'wrap',mt:5,ml:2 }}>
 <Card sx={{ maxWidth: 280,mr:3,mb:3  }}>
  <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 280,mr:3,mb:3 }}>
  <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 280,mr:3,mb:3  }}>
  <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
 </Box>
  </Container>
  </>;
};

export default Blog;
