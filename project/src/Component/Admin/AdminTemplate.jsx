import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminTemplate = () => {
    return (
        <>
          hello.. admin
          <Outlet></Outlet>  
        </>
    );
};

export default AdminTemplate;