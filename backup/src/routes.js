// Layout Types
import { DefaultLayout, DietitianDefaultSideBar, PatientDefaultSideBar, Plain } from "./layouts";

// Route Views
import BlogOverview from "./pages/BlogOverview";
import UserProfileLite from "./pages/UserProfileLite";
import AddNewPost from "./pages/AddNewPost";
import Errors from "./pages/Errors";
import ComponentsOverview from "./pages/ComponentsOverview";
import Tables from "./pages/Tables";
import BlogPosts from "./pages/BlogPosts";
import Interface from "./pages/Interface";
import PageNotFound from "./pages/404";
import DietitianLogin from "./pages/dietician/LogIn";
import PatientLogin from "./pages/patient/LogIn";
import PatientSignUp from "./pages/patient/signup";
import RegisterPatient from "./pages/dietician/RegisterPatient";
import UploadDietPlan from "./pages/dietician/UploadDietPlan";
import Patients from "./pages/dietician/Patients";
import CreateProgressFlowIntakeForm from "./pages/dietician/CreateProgressFlowIntakeForm.js";
// import Landing from "./pages/Landing";
// import RegisterCompany from "./pages/superadmin/RegisterCompany";
import SuperAdminLogin from "./pages/superadmin/Login";
import CompanyPatients from "./pages/superadmin/Patients";
import CreateDietitian from "./pages/superadmin/CreateDietitian";
import Dietitians from "./pages/superadmin/Dietitians";
import CreatePatient from "./pages/superadmin/CreatePatient";
import PatientDetails from "./pages/superadmin/PatientDetails";
import DietitianPatients from './pages/superadmin/DietitianPatients';
import DietitianPatientDetails from './pages/superadmin/DietitianPatientDetails'
import UploadDocument from "./pages/dietician/UploadDocument";
import PatientProfile from './pages/patient/Profile'
import DietitianProfile from "./pages/dietician/Profile";
import SuperAdminProfile from "./pages/superadmin/Profile";
import DietitianDetails from './pages/superadmin/DietitianDetails';

export default [
  // {
  //   path: "/",
  //   exact: true,
  //   layout: Plain,
  //   component: Landing,
  // },
  {
    path: "/",
    exact: true,
    layout: Plain,
    component: Interface,
  },
  // {
  //   path: "/register_company",
  //   layout: Plain,
  //   component: RegisterCompany,
  // },

  // superadmin routes
  {
    path: "/superadmin/login",
    layout: Plain,
    component: SuperAdminLogin,
  },
  {
    path: "/superadmin/dashboard",
    layout: DefaultLayout,
    component: ComponentsOverview,
  },
  // {
  //   path: "/superadmin/profile",
  //   layout: DefaultLayout,
  //   component: UserProfileLite,
  // },
  {
    path: "/superadmin/profile",
    layout: DefaultLayout,
    component: SuperAdminProfile
  },
  {
    path: '/superadmin/dietitians',
    layout: DefaultLayout,
    component: Dietitians
  },
  {
    path: '/superadmin/dietitian/details',
    layout: DefaultLayout,
    component: DietitianDetails
  },
  {
    path: '/superadmin/dietitian/patients',
    layout: DefaultLayout,
    component: DietitianPatients,
  },
  {
    path: "/superadmin/dietitian/patient_details",
    layout: DefaultLayout,
    component: DietitianPatientDetails
  },
  {
    path: "/superadmin/patients",
    layout: DefaultLayout,
    component: CompanyPatients,
  },
  {
    path: "/superadmin/create_dietitian",
    layout: DefaultLayout,
    component: CreateDietitian,
  },
  {
    path: "/superadmin/create_patient",
    layout: DefaultLayout,
    component: CreatePatient,
  },
  {
    path: "/superadmin/patient/details",
    layout: DefaultLayout,
    component: PatientDetails,
  },

  // Patient routes
  {
    path: "/patient/login",
    layout: Plain,
    component: PatientLogin,
  },
  {
    path: "/patient/signup",
    layout: Plain,
    component: PatientSignUp,
  },
  {
    path: "/patient/dashboard",
    layout: PatientDefaultSideBar,
    component: ComponentsOverview,
  },
  {
    path: '/patient/profile',
    layout: PatientDefaultSideBar,
    component: PatientProfile,
  },

  // Dietitian routes
  {
    path: "/dietitian/login",
    layout: Plain,
    component: DietitianLogin,
  },
  {
    path: "/dietitian/profile",
    layout: DietitianDefaultSideBar,
    component: DietitianProfile
  },
  {
    path: '/dietitian/dashboard',
    layout: DietitianDefaultSideBar,
    component: ComponentsOverview
  },
  {
    path: "/dietitian/register_patient",
    layout: DietitianDefaultSideBar,
    component: RegisterPatient,
  },
  {
    path: "/dietitian/patients",
    layout: DietitianDefaultSideBar,
    component: Patients,
  },
  {
    path: "/dietitian/upload_diet_plan",
    layout: DietitianDefaultSideBar,
    component: UploadDietPlan,
  },
  {
    path: "/dietitian/upload_document",
    layout: DietitianDefaultSideBar,
    component: UploadDocument,
  },
  {
    path: "/dietitian/progress_flow_intake_form",
    layout: DietitianDefaultSideBar,
    component: CreateProgressFlowIntakeForm,
  },

  // 404 route
  {
    layout: Plain,
    component: PageNotFound,
  },
  //

  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview,
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite,
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost,
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors,
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview,
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables,
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts,
  },
];
