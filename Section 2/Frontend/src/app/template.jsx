'use client';
import Navbar from '@/components/navbar';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';

const Template = ({ children }) => {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, [])

    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={1000}>
            <Navbar />
            {children}
        </SnackbarProvider>
    )
}

export default Template;