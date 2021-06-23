export default function() {
  return [
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Patients",
      htmlBefore: '<i class="material-icons">groups</i>',
      to: "/dietician/patients",
    },
    {
      title: "Upload Diet Plan",
      htmlBefore: '<i class="material-icons">post_add</i>',
      to: "/dietician/upload_diet_plan"
    },
    {
      title: "Create Intake Flow Progress Form",
      htmlBefore: '<i class="material-icons">assignment</i>',
      to: "/dietician/progress_flow_intake_form"
    },
    {
      title: "Appointments",
      htmlBefore: '<i class="material-icons">schedule</i>',
      to: "/dietician/appointments"
    },
    {
      title: "Documents",
      htmlBefore: "<i class='material-icons'>folder</i>",
      to: "/dietician/documents"
    },

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
  ];
}
