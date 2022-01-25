import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Typography } from '@mui/material';
import Banner from './Banner';
import WhyUs from './WhyUs';
import UserApp from './UserApp';
import AdminApp from './AdminApp';
import OpApp from './OpApp';
import Bike from './Bike';



const Home = () => {
  return <>
   <Banner />
   <WhyUs />
   <UserApp />
   <AdminApp />
   <OpApp />
   <Bike />
  </>;
};

export default Home;
