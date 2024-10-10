import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Servicespage from './pages/Servicespage';
import BusinessProcess from './pages/BusinessProcess';
import StartupServices from './pages/StartupServices';
import TalentServices from './pages/TalentServices';
import Career from './pages/Career';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import Job from './pages/Job';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import JobDetails from './pages/JobDetails';
import ApplyForm from './pages/ApplyForm'; // New import for Apply page
import ThankYouPage from './pages/ThankYouPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "services",
    element: <Servicespage />,
  },
  {
    path: "business-process",
    element: <BusinessProcess />,
  },
  {
    path: "startup-services",
    element: <StartupServices />,
  },
  {
    path: "talent-services",
    element: <TalentServices />,
  },
  {
    path: "careers",
    element: <Career />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "thank-you",
    element: <ThankYouPage />,
  },
  // {
  //   path: "job",
  //   element: <Job />,
  // },
  {
    path: "/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin-panel",
    element: <AdminPanel />,
  },
  {
    path: "/job/:id",
    element: <JobDetails />,
  },
  {
    path: "/apply/:id", // Route for Apply page
    element: <ApplyForm />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
