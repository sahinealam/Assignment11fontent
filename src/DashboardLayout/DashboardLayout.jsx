import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../Aside/Aside';
// import Profile from '../Profile';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <Aside></Aside>
            <Outlet></Outlet>
            {/* <Profile></Profile> */}
        </div>
    );
};

export default DashboardLayout;