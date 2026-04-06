import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../Aside/Aside';

const DashboardLayout = () => {
    return (
        <div>
            <Aside></Aside>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;