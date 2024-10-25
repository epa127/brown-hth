import React from "react";
import Home from "../components/pages/Home.tsx";
import Join from "../components/pages/Join.tsx";
import About from "../components/pages/About.tsx";
import Upcoming from "../components/pages/Upcoming.tsx";
import Past from "../components/pages/Past.tsx";
import Contact from "../components/pages/Contact.tsx";

export const routes = [
  { 
    path: '/' , 
    component: <Home />,
    label: 'Home'
  },
  { 
    path: '/how-to-join' , 
    component: <Join />,
    label: 'How To Join'
  },
  { 
    path: '/about' , 
    component: <About />,
    label: 'About'
  },
  { 
    path: '/upcoming-events' , 
    component: <Upcoming />,
    label: 'Upcoming Events'
  },
  { 
    path: '/past-events' , 
    component: <Past />,
    label: 'Past Events'
  },
  { 
    path: '/contact-us' , 
    component: <Contact />,
    label: 'Contact Us'
  },
];