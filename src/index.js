import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import TreeStructure from './TreeStructure';
import TipsCalculator from './TipsCalculator';
import Users from './Users';
import Error from './Error';
import FetchWithReactQuery from './FetchWithReactQuery';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Dot from './Dot';



const queryClient = new QueryClient()
const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <Error />, },
  { path: 'treestructure', element: <TreeStructure /> },
  { path: 'tipcalculator', element: <TipsCalculator /> },
  { path: 'fetchusers', element: <Users /> },
  { path: 'reactquery', element: <FetchWithReactQuery /> },
  { path: 'dotthepage', element: <Dot /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <QueryClientProvider client={queryClient}>

    <RouterProvider router={router} />
    </QueryClientProvider>

  </>
);


