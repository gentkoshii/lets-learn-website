import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Layout from './Layout'; 
import Homepage from './Pages/HomePage';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Instructors from './Pages/Instructors';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/About',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/Courses',
    element: (
      <Layout>
        <Courses />
      </Layout>
    ),
  },
  {
    path: '/Instructors',
    element: (
      <Layout>
        <Instructors />
      </Layout>
    ),
  },
  {
    path: '/Blog',
    element: (
      <Layout>
        <Blog />
      </Layout>
    ),
  },
  {
    path: '/Contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
