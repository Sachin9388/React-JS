import React from 'react';
import BtnGroup from './ComComponent/BtnGroup';
import { Outlet } from 'react-router-dom';
  
  export default function AboutPage() {
  
    return (
      <>
        <h1>About Page </h1>
        <BtnGroup/>
        <Outlet/>
      </>
      
    );
  }