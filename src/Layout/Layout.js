import React from 'react';
import CustomNavbar from './CustomNavbar';


const Layout=(props)=>{
        return(
            <>
            <CustomNavbar/>
            {props.children}
            </>
        );
}

export default Layout;