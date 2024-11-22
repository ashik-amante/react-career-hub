import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featuredjobs/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <h1>Home</h1>
        </div>
    );
};

export default Home;