
import React from "react";

const Home = React.lazy(()=>import("../pages/Home"));
const About = React.lazy(()=>import("../pages/About"));
const Contacts = React.lazy(()=>import("../pages/Contacts"))
const NotFound = React.lazy(()=>import("../components/NotFound"))
export const RenderRoute  = [
    {
        id:1,
        component:Home,
        path:"/"
    },

    {
        id:2,
        component:About,
        path:"/about"
    },

    {
        id:3,
        component:Contacts,
        path:"/contact"
    },
    {
        id:4,
        component:NotFound,
        path:"*"
    }
]