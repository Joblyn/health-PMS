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
import PatientSignUp from "./pages/patient/signup";
import RegisterPatient from "./pages/dietician/RegisterPatient";
import UploadDietPlan from './pages/dietician/UploadDietPlan';
import Patients from './pages/dietician/Patients'; 
import CreateProgressFlowIntakeForm from "./pages/dietician/CreateProgressFlowIntakeForm.js";

export default [
  {
    path: "/",
    exact: true,
    layout: Plain,
    component: Home
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
    path: "/dietician/login",
    layout: Plain,
    component: DieticianLogin
  },
  {
    path: "/patient/login",
    layout: Plain,
    component: PatientLogin
  },
  {
    path: "/patient/signup",
    layout: Plain,
    component: PatientSignUp
  },
  {
    path: "/dietician/register_patient",
    layout: DefaultLayout,
    component: RegisterPatient
  },
  {
    path: "/dietician/patients",
    layout: DefaultLayout,
    component: Patients
  },
  {
    path: "/dietician/upload_diet_plan",
    layout: DefaultLayout,
    component: UploadDietPlan
  },
  {
    path: "/dietician/progress_flow_intake_form",
    layout: DefaultLayout,
    component: CreateProgressFlowIntakeForm
  },
  // 404 route
  {
    layout: Plain,
    component: PageNotFound  
  }
];
