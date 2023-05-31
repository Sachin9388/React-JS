import React from 'react';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createBrowserRouter } from 'react-router-dom';
import Header from "./ComComponent/Header";
import HomePage from "./HomePage";
import Feature from "./Feature";
import ConatctPage from "./ContactPage";
import AboutPage from "./AboutPage";
import Examples from "./Examples";
import BtnGroup from './ComComponent/BtnGroup';
import BtnLeft from './ComComponent/BtnLeft';
import BtnMid from './ComComponent/BtnMid';
import BtnRight from './ComComponent/BtnRight';
import ClassCompoMenu from './Components/ClassComponent/ClassCompoMenu';
import ClassCompoIntro from './Components/ClassComponent/ClassCompoIntro';
import ClassCompoJSX from './Components/ClassComponent/ClassCompoJSX';
import FunctionalCompoMenu from './Components/FunctionalComponent/FunctionalCompoMenu';
import FunctionalCompoIntro from './Components/FunctionalComponent/FunctionalCompoIntro';
import StyledComponent from './Components/FunctionalComponent/StyledComponent';
// import ClassCompoRoute from './Components/ClassComponent/ClassCompoRoute';
// import FunctionalCompoRoute  from './Components/FunctionalComponent/FunctionalCompoRoute';

// const ClassCompoRoute = React.lazy(() => import('./Components/ClassComponent/ClassCompoRoute'));
// const FunctionalCompoRoute  = React.lazy(() => import('./Components/FunctionalComponent/FunctionalCompoRoute'));

const app = createBrowserRouter([
  {
    path:"/",
    element:<Header/>,
    children:[
      {
        // path:"/home",
        index : true ,
        element:<HomePage/>,
      },
      {
        path:"/about",
        element:<AboutPage/>,
        children:[
        {
          path:"btngroup",
          element:<BtnGroup/>,   
        },
        {
          path:"/about/btnleft",
          element:<BtnLeft/>,
        },
        {
          path:"/about/btnmid",
          element:<BtnMid/>,
        },       
        {
          path:"/about/btnright",
          element:<BtnRight/>,
          children:[
            {
              path:"/about/btnright/btnleft",
              element:<BtnLeft/>,
            },
            {
              path:"/about/btnright/btnmid",
              element:<BtnMid/>,
            },
            {
              path:"/about/btnright/btnright",
              element:<BtnRight/>,
            },
          ]
        },
     ]
   },
      {
        path:"/contact",
        element:<ConatctPage/>,
      },
      {
        path:"/feature",
        element:<Feature/>,
      },
      {
        path:"/examples",
        element:<Examples/>,
        children:[
          {
            path:"classcomponent/*",
            element:<ClassCompoMenu/>,
            children:[
              {
                path:"classcompointro",
                element:<ClassCompoIntro/>,
              },
              {
                path:"classcompojsx",
                element:<ClassCompoJSX/>,
              },
            ] 
          },
          {
            path: "functionalcomponent/*",
            element:<FunctionalCompoMenu/>,
            children:[
              {
                path:"functionalcompointro",
                element:<FunctionalCompoIntro/>, 
              },
              {
                path:"styledcomponent",
                element:<StyledComponent/>,
              },
            ]
          },
        ],
      },
    ],
  },
]);

export default app;
