import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import HomeUp from '../Pages/Home/HomeUp';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <HomeUp></HomeUp>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;