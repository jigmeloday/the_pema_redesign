export const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", to: "/about" },
      { label: "The PEMA Approach", to: "/approach" },
    ],
  },
  {
    label: "Our Services",
    children: [
      { label: "Prevention and Engagement", to: "/services/prevention" },
      { label: "Response Services", to: "/services/response" },
      { label: "Treatment and Rehabilitation", to: "/services/treatment" },
      { label: "Reintegration and Aftercare", to: "/services/aftercare" },
    ],
  },
  { label: "News", to: "/news" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];