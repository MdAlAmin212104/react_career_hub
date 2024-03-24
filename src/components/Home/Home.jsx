import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
      return (
            <div className='container mx-auto'>
                  <Banner />
                  <CategoryList />
                  <FeaturedJobs/>
            </div>
      );
};

export default Home;