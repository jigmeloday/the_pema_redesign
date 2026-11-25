import type { NavItem } from "@/types/nav.type";

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
  {
    label: "Our Services and Programmes",
    children: [
      { label: "Prevention and Engagement", to: "/prevention-and-engagement" },
      { label: "Response Services", to: "/response-services" },
      { label: "Treatment and Rehabilitation", to: "/treatment-and-rehabilitation" },
      { label: "Reintegration and Aftercare", to: "/reintegration-and-aftercare" },
    ],
  },
  { label: "Annual PEMA Symposium", to: "/annual-pema-symposium" },
  { label: "Contact Us", to: "/contact-us" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Updates", to: "/updates" },
  {
    label: "Resources",
    children: [{ label: "FAQs", to: "/faqs" }],
  },
];
