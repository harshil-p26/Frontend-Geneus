import { PowerIcon } from "@heroicons/react/16/solid";
import microScope from "../assets/microscope.png";
import search from "../assets/search.png";
import genes from "../assets/genes.png";

export const navbarLinks = [
  {
    name: "Manage GeneSets",
    subMenu: [
      "Manage Projects",
      "View My GeneSets ",
      "Search GeneSets",
      "Upload GeneSets",
      "Upload Batch GeneSets",
    ],
  },
  {
    name: "Curation",
    subMenu: ["Search/Assign Publication", "Manage Curation Tasks"],
  },
  {
    name: "Analyze GeneSets",
    subMenu: ["Analyze GeneSets", "View Results", "Emphasize Genes"],
  },
  {
    name: "Welcome Guests",
    subMenu: [
      { name: "Account Settings", icon: PowerIcon },
      { name: "Logout", icon: PowerIcon },
    ],
  },
];

export const exploreIcons = [
  {
    img: microScope,
    name: "Manage GeneSets",
    desc: "Organize and update gene sets",
  },
  {
    img: search,
    name: "Curation",
    desc: "Curate gene sets based on specific criteria",
  },
  {
    img: genes,
    name: "Analyze GeneSets",
    desc: "Analyze gene sets to extract valuable insights",
  },
];
