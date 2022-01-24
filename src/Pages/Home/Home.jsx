import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Typography } from '@mui/material';
import Banner from './Banner';
import WhyUs from './WhyUs';



const Home = () => {
  return <>
   <Banner />
   <WhyUs />
  </>;
};

export default Home;
