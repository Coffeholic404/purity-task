interface SidebarLink {
    title: string;
    icon: string;
    to: string;
  }
  
  export const sidebar_links: SidebarLink[] = [
    {
      title: "Dashboard",
      icon: "ion:home",
      to: "/",
    },
    {
      title: "Tables",
      icon: "ion:stats-chart",
      to: "/TheTables",
    },
    {
      title: "Billing",
      icon: "ion:card",
      to: "/TheBilling",
    },
    {
      title: "RTL",
      icon: "ion:build",
      to: "/TheIncome",
    },
    // {
    //   title: "التالف",
    //   icon: "tabler:box-off",
    //   to: "/TheDamge",
    // },
    // {
    //   title: "الموردين",
    //   icon: "ph:users",
    //   to: "/TheSupplier",
    // },
    // {
    //   title: "التقارير",
    //   icon: "carbon:report-data",
    //   to: "/TheReports",
    // },
    // {
    //   title: "المستخدمين",
    //   icon: "ph:user",
    //   to: "/TheUsers",
    // },
  ];
  

  export const account_links: SidebarLink[] = [
    {
      title: "Profile",
      icon: "ion:person",
      to: "/TheProfile",
    },
    {
      title: "Sign In",
      icon: "ion:document",
      to: "/TheSignIn",
    },
    {
      title: "Sign Up",
      icon: "ion:rocket-sharp",
      to: "/TheSignUp",
    },
];