export const getPatientNavItems = () => {
  return [
    // {
    //   title: "Dashboard",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: '/patient/dashboard'
    // },
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: `/patient/profile`,
    },
    {
      title: "Upload Diet Plan",
      htmlBefore: '<i class="material-icons">post_add</i>',
      to: `/patient/upload_diet_plan`,
    },
    {
      title: "Create Intake Flow Progress Form",
      htmlBefore: '<i class="material-icons">assignment</i>',
      to: `/patient/progress_flow_intake_form`,
    },
    {
      title: "Appointments",
      htmlBefore: '<i class="material-icons">schedule</i>',
      to: `/patient/appointments`,
    },
    {
      title: "Documents",
      htmlBefore: "<i class='material-icons'>folder</i>",
      to: `/patient/documents`,
    },
    // {
    //   title: "Documents",
    //   htmlBefore: "<i class='material-icons'>upload_file</i>",
    //   to: `/patient/upload_document`,
    // },
  ] 
}

export const getDietitianNavItems = () => {
  return [
    // {
    //   title: "Dashboard",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: '/dietitian/dashboard'
    // },
    // {
    //   title: "Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: `/dietitian/profile`,
    // },
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/dietitian/profile",
    },
    {
      title: "Patients",
      htmlBefore: '<i class="material-icons">groups</i>',
      to: `/dietitian/patients`,
    },
    {
      title: "Create Patient",
      htmlBefore: '<i class="material-icons">person_add_alt</i>',
      to: '/dietitian/register_patient'
    },
    {
      title: "Upload Diet Plan",
      htmlBefore: '<i class="material-icons">post_add</i>',
      to: `/dietitian/upload_diet_plan`,
    },
    {
      title: "Create Intake Flow Progress Form",
      htmlBefore: '<i class="material-icons">assignment</i>',
      to: `/dietitian/progress_flow_intake_form`,
    },
    {
      title: "Appointments",
      htmlBefore: '<i class="material-icons">schedule</i>',
      to: `/dietitian/appointments`,
    },
    {
      title: "Documents",
      htmlBefore: "<i class='material-icons'>folder</i>",
      to: `/dietitian/documents`,
    },
    {
      title: "Upload Document",
      htmlBefore: "<i class='material-icons'>upload_file</i>",
      to: `/dietitian/upload_documents`,
    },
  ]
}

export function getSuperAdminNavItems() {
  return [
        // {
        //   title: "Dashboard",
        //   htmlBefore: '<i class="material-icons">view_module</i>',
        //   to: '/superadmin/dashboard'
        // },
        // {
        //   title: "Profile",
        //   htmlBefore: '<i class="material-icons">person</i>',
        //   to: `/superadmin/profile`,
        // },
        {
          title: "Profile",
          htmlBefore: '<i class="material-icons">person</i>',
          to: "/superadmin/profile",
        },
        {
          title: "Dietitians",
          htmlBefore: '<i class="material-icons">person</i>',
          to: `/superadmin/dietitians`,
        },
        {
          title: "Create Dietitian",
          htmlBefore: '<i class="material-icons">person_add_alt</i>',
          to: `/superadmin/create_dietitian`,
        },
        {
          title: "Create Patient",
          htmlBefore: '<i class="material-icons">person_add_alt</i>',
          to: `/superadmin/create_patient`,
        },
        {
          title: "Patients",
          htmlBefore: '<i class="material-icons">groups</i>',
          to: `/superadmin/patients`,
        },
        // {
        //   title: "Upload Diet Plan",
        //   htmlBefore: '<i class="material-icons">post_add</i>',
        //   to: `/superadmin/upload_diet_plan`,
        // },
        {
          title: "Create Intake Flow Progress Form",
          htmlBefore: '<i class="material-icons">assignment</i>',
          to: `/superadmin/progress_flow_intake_form`,
        },
        {
          title: "Appointments",
          htmlBefore: '<i class="material-icons">schedule</i>',
          to: `/superadmin/appointments`,
        },
        {
          title: "Documents",
          htmlBefore: "<i class='material-icons'>folder</i>",
          to: `/superadmin/documents`,
        },
      ]
}

// {
//   title: "Profile",
//   htmlBefore: '<i class="material-icons">person</i>',
//   to: "/user-profile-lite",
// },
// {
//   title: "Blog Dashboard",
//   to: "/blog-overview",
//   htmlBefore: '<i class="material-icons">edit</i>',
// },
// {
//   title: "Blog Posts",
//   htmlBefore: '<i class="material-icons">vertical_split</i>',
//   to: "/blog-posts",
// },
// {
//   title: "Add New Post",
//   htmlBefore: '<i class="material-icons">note_add</i>',
//   to: "/add-new-post",
// },
// {
//   title: "Forms & Components",
//   htmlBefore: '<i class="material-icons">view_module</i>',
//   to: "/components-overview",
// },
// {
//   title: "Tables",
//   htmlBefore: '<i class="material-icons">table_chart</i>',
//   to: "/tables",
// },
// {
//   title: "Errors",
//   htmlBefore: '<i class="material-icons">error</i>',
//   to: "/errors",
// }
// }
