import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, Plain } from "./layouts";

// Route Views
import BlogOverview from "./pages/BlogOverview";
import UserProfileLite from "./pages/UserProfileLite";
import AddNewPost from "./pages/AddNewPost";
import Errors from "./pages/Errors";
import ComponentsOverview from "./pages/ComponentsOverview";
import Tables from "./pages/Tables";
import BlogPosts from "./pages/BlogPosts";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import DieticianLogin from "./pages/dietician/LogIn";
import PatientLogin from "./pages/patient/LogIn" 

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },

  // edit
  {
    path: "/home",
    layout: Plain,
    component: Home
  },
  {
    path: "/dietician/login",
    layout: Plain,
    component: DieticianLogin
  },
  {
    path: "/patient/login",
    layout: Plain,
    component: PatientLogin
  }
  // {
  //   path: "*",
  //   layout: Plain,
  //   component: PageNotFound  
  // }
];
