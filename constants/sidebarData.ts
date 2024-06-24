interface SidebarLink {
    title: string;
    icon: string;
    to: string;
  }
  
  export const sidebar_links: SidebarLink[] = [
    {
      title: "Dashboard",
      icon: "~/assets/svg/home.svg",
      to: "/",
    },
    // {
    //   title: "المخازن",
    //   icon: "material-symbols:storefront-outline-rounded",
    //   to: "/TheStores",
    // },
    // {
    //   title: "المواد",
    //   icon: "solar:box-broken",
    //   to: "/TheProducts",
    // },
    // {
    //   title: "المواد القادمة",
    //   icon: "material-symbols:input-circle-rounded",
    //   to: "/TheIncome",
    // },
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
  