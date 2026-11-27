import type { NavGroupItem, NavItem } from "@/types/nav.type";

const SERVICES_GROUP: NavGroupItem = {
  label: "Our Services and Programmes",
  children: [
    { label: "Prevention and Engagement", to: "/prevention-and-engagement" },
    { label: "Response Services", to: "/response-services" },
    { label: "Treatment and Rehabilitation", to: "/treatment-and-rehabilitation" },
    { label: "Reintegration and Aftercare", to: "/reintegration-and-aftercare" },
  ],
};

// Order follows the header of thepema.gov.bt; Updates and Resources are in the footer.
// Dropdown contents still need to be checked against the live site.
export const NAV_LINKS: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", to: "/about" },
      { label: "The PEMA Approach", to: "/approach" },
    ],
  },
  SERVICES_GROUP,
  { label: "Annual PEMA Symposium", to: "/annual-pema-symposium" },
  { label: "Contact Us", to: "/contact-us" },
];

// One entry per footer column.
export const FOOTER_COLUMNS: NavGroupItem[] = [
  SERVICES_GROUP,
  {
    label: "Explore",
    children: [
      { label: "Home", to: "/" },
      { label: "Annual PEMA Symposium", to: "/annual-pema-symposium" },
      { label: "Updates", to: "/updates" },
      { label: "Contact Us", to: "/contact-us" },
    ],
  },
  { label: "Resources", children: [{ label: "FAQs", to: "/faqs" }] },
];
