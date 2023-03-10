import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TreeStructure from './TreeStructure';
import TipsCalculator from './TipsCalculator';
import Users from './Users';
import Error from './Error';


const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <Error />, },
  { path: 'treestructure', element: <TreeStructure /> },
  { path: 'tipcalculator', element: <TipsCalculator /> },
  { path: 'fetchusers', element: <Users /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />

  </>
);


