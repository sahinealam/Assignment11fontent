import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../Aside/Aside';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <Aside></Aside>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;