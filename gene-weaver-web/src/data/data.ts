import { PowerIcon } from "@heroicons/react/16/solid";
import microScope from "../assets/microscope.png";
import search from "../assets/search.png";
import genes from "../assets/genes.png";
import hiSim from "../assets/1.jpeg";
import GeneSetGraph from "../assets/2.jpeg";
import JaccardImage from "../assets/3.jpeg";
import GeneSetClusteringImage from "../assets/4.jpeg";
import MSETImage from "../assets/5.jpeg";

export const navbarLinks = [
  {
    name: "Manage GeneSets",
    subMenu: [
      { name: "Manage Projects", link: "/manage-projects" },
      { name: "View My GeneSets", link: "/view-geneset" },
      { name: "Search GeneSets", link: "/search-geneset" },
      { name: "Upload GeneSets", link: "/upload-geneset" },
      { name: "Upload Batch GeneSets", link: "/batch-upload" },
    ],
  },
  {
    name: "Curation",
    subMenu: [
      { name: "Search/Assign Publication", link: "/assign-publication" },
      { name: "Manage Curation Tasks", link: "/manage-curation" },
    ],
  },
  {
    name: "Analyze GeneSets",
    subMenu: [
      { name: "Analyze GeneSets", link: "/analyze-geneset" },
      { name: "View Results", link: "/view-result" },
      { name: "Emphasize Genes", link: "/emphasis-gen" },
    ],
  },
  {
    name: "Welcome Guests",
    subMenu: [
      { name: "Account Settings", icon: PowerIcon, link: "" },
      { name: "Logout", icon: PowerIcon, link: "" },
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

export const analysisTools = [
  {
    icon: hiSim,
    title: "HiSIM",
    description:
      "Biclique-based analysis used to generate hierarchical maps of gene set intersections.",
  },
  {
    icon: GeneSetGraph,
    title: "GeneSetGraph",
    description: "Visualize the Gene-GeneSet Graph",
  },
  {
    icon: JaccardImage,
    title: "Jaccard Similarity",
    description:
      "Calculate Jaccard Coefficients for all pairwise combinations of GeneSets",
  },
  {
    icon: GeneSetClusteringImage,
    title: "GeneSet Clustering",
    description: "Use Jaccard Distance to cluster GeneSets",
  },
  {
    icon: MSETImage,
    title: "MSET",
    description: "Enrichment test for all GeneSets Selected",
  },
  {
    icon: hiSim,
    title: "Find Variant Tool",
    description:
      "The Find Variants tool is designed to help a user find gene sets analogous to a target gene set in other species",
  },
  {
    icon: GeneSetGraph,
    title: "ABBA Gene Search",
    description:
      "Find genes most closely associated with your gene(s) of interest",
  },
  {
    icon: JaccardImage,
    title: "Boolean Algebra",
    description: "Use Advanced set logic to integrate multiple GeneSets",
  },
  {
    icon: GeneSetClusteringImage,
    title: "DBSCAN Gene Clustering",
    description: "Based on clustering algorithm for genes",
  },
  {
    icon: MSETImage,
    title: "Combine GeneSets",
    description:
      "Advanced tool for multiple GeneSets into a single association matrixs",
  },
];

export const ViewResultsMenu = [
  {
    name: "Tool Type",
    subMenu: [
      "HiSIM",
      "Jaccard Similarity",
      "MSET",
      "ABBA Gene Search",
      "DBSCAN Gene Clustering",
      "GeneSetGraph",
      "Find variant Tool",
      "Boolean Algebra",
      "Combine GeneSets",
      
    ],
  },

  {
    name: "Status",
    subMenu: [
      { name: "Done", icon: PowerIcon },
      { name: "Failed", icon: PowerIcon },
      { name: "Running", icon: PowerIcon },
    ],
  },
];

export const tableData = [
  {
    name: "GeneSet Run A",
    tool: "ABBA",
    date: "April 1,2025",
    description: "First trial",
    status: "done",
  },
  {
    name: "GeneSet Run A",
    tool: "ABBA",
    date: "April 1,2025",
    description: "First trial",
    status: "running",
  },
  {
    name: "GeneSet Run A",
    tool: "ABBA",
    date: "April 1,2025",
    description: "First trial",
    status: "failed",
  },
  {
    name: "GeneSet Run A",
    tool: "ABBA",
    date: "April 1,2025",
    description: "First trial",
    status: "done",
  },
];
