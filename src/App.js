import React from 'react';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createBrowserRouter } from 'react-router-dom';
import Header from "./ComComponent/Header";
import HomePage from "./HomePage";
import Feature from "./Feature";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import Examples from "./Examples";
import BtnGroup from './ComComponent/BtnGroup';
import BtnLeft from './ComComponent/BtnLeft';
import BtnMid from './ComComponent/BtnMid';
import BtnRight from './ComComponent/BtnRight';
import ClassCompoMenu from './Components/ClassComponent/ClassCompoMenu';


import ClassCompoIntro from './Components/ClassComponent/01ClassCompoIntro';
import ClassCompoJSX from './Components/ClassComponent/02ClassCompoJSX';
import Props from './Components/ClassComponent/03Props';
import ClassCompoConstructor from './Components/ClassComponent/01ClassCompoConstructor';
import ClassCompoState from './Components/ClassComponent/04ClassCompoState';
import StateLifeCycle from './Components/ClassComponent/05StateLifeCycle';
import StateLifeCycleLoader from './Components/ClassComponent/05StateLifeCycleLoader';
import ConditionalRendering from './Components/ClassComponent/06ConditionalRendering';
import LogAndReg from './Components/ClassComponent/LogAndReg';
import ListKeys from './Components/ClassComponent/07ListKeys';
import ControlledCompo from './Components/ClassComponent/08ControlledCompo';
import UncontrolledCompo from './Components/ClassComponent/09UncontrolledCompo';
import CompositionVsInheritance from './Components/ClassComponent/10CompositionVsInheritance';
import StateLifting from './Components/ClassComponent/11StateLifting';
import Array from './Components/ClassComponent/12Array';
import ApiExample from './Components/ClassComponent/13ApiExample';
import CssExample from './Components/ClassComponent/14CssExample';
import DynamicSubmenu from './Components/ClassComponent/15DynamicSubmenu';
import SpreadandRest from './Components/ClassComponent/16SpreadandRest';
import Hocmain from './Components/ClassComponent/17Hocmain'
import Task from './Components/ClassComponent/18Task'
import CheckList from './Components/ClassComponent/CheckList';

import FunctionalCompoMenu from './Components/FunctionalComponent/FunctionalCompoMenu';
import FunctionalCompoIntro from './Components/FunctionalComponent/01FunctionalCompoIntro';
import StyledComponent from './Components/FunctionalComponent/StyledComponent';
import UsestateHook from './Components/FunctionalComponent/02UsestateHook';

// import ClassCompoRoute from './Components/ClassComponent/ClassCompoRoute';
// import FunctionalCompoRoute  from './Components/FunctionalComponent/FunctionalCompoRoute';

// const ClassCompoRoute = React.lazy(() => import('./Components/ClassComponent/ClassCompoRoute'));
// const FunctionalCompoRoute  = React.lazy(() => import('./Components/FunctionalComponent/FunctionalCompoRoute'));

const app = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        // path:"/home",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        children: [
          {
            path: "btngroup",
            element: <BtnGroup />,
          },
          {
            path: "/about/btnleft",
            element: <BtnLeft />,
          },
          {
            path: "/about/btnmid",
            element: <BtnMid />,
          },
          {
            path: "/about/btnright",
            element: <BtnRight />,
            children: [
              {
                path: "/about/btnright/btnleft",
                element: <BtnLeft />,
              },
              {
                path: "/about/btnright/btnmid",
                element: <BtnMid />,
              },
              {
                path: "/about/btnright/btnright",
                element: <BtnRight />,
              },
            ]
          },
        ]
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
      {
        path: "/examples",
        element: <Examples />,
        children: [
          {
            path: "classcomponent/*",
            element: <ClassCompoMenu />,
            children: [
              {
                path: "classcompointro",
                element: <ClassCompoIntro />,
              },
              {
                path: "classcompojsx",
                element: <ClassCompoJSX />,
              },
              {
                path: "props",
                element: <Props />,
              },
              {
                path: "classcompoconstructor",
                element: <ClassCompoConstructor />,
              },
              {
                path: "classcompostate",
                element: <ClassCompoState />,
              },
              {
                path: "classcompostatelifecycle",
                element: <StateLifeCycle />,
              },
              {
                path: "classcompostatelifecycleloader",
                element: <StateLifeCycleLoader />,
              },
              {
                path: "logandreg",
                element: <LogAndReg />,
              },
              {
                path: "classcompoconditionalrendering",
                element: <ConditionalRendering />,
              },
              {
                path: "classcompolistandkeys",
                element: <ListKeys />,
              },
              {
                path: "classcontrolledcompo",
                element: <ControlledCompo />,
              },
              {
                path: "classuncontrolledcompo",
                element: <UncontrolledCompo />,
              },
              {
                path: "classcompositionvsinheritance",
                element: <CompositionVsInheritance />,
              },
              {
                path: "classcompostatelifting",
                element: <StateLifting />,
              },
              {
                path: "classcompoarray",
                element: <Array />,
              },
              {
                path: "classcompoapiexample",
                element: <ApiExample />,
              },
              {
                path: "cssexample",
                element: <CssExample />,
              },
              {
                path: "dynamicsubmenu",
                element: <DynamicSubmenu />,
              },
              {
                path: "spreadandrest",
                element: <SpreadandRest />,
              },
              {
                path: "hoc",
                element: <Hocmain />,
              },
              {
                path: "task",
                element: <Task />,
              },
              {
                path: "checklist",
                element: <CheckList/>,
              },
            ]
          },
          {
            path: "functionalcomponent/*",
            element: <FunctionalCompoMenu />,
            children: [
              {
                path: "functionalcompointro",
                element: <FunctionalCompoIntro />,
              },
              {
                path: "functionalcompousestatehook",
                element: <UsestateHook />,
              },
              {
                path: "styledcomponent",
                element: <StyledComponent />,
              },
            ]
          },
        ],
      },
    ],
  },
]);

export default app;
