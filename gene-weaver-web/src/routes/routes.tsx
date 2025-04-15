import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AssignPublication from "../pages/AssignPublication";
import ManageCuration from "../pages/ManageCuration";
import AnalyzeGeneSet from "../pages/AnalyzeGeneSet";
import ViewResults from "../pages/ViewResults";
import EmphasisGenes from "../pages/EmphasisGenes";
import ManageProjects from "../pages/ManageProjects";
import ViewGenSets from "../pages/ViewGenSets";
import SearchGeneSet from "../pages/SearchGeneSet";
import UploadGeneSet from "../pages/UploadGeneSet";
import BatchUpload from "../pages/BatchUpload";

// we give it an array of routes objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/assign-publication", element: <AssignPublication /> },
  { path: "/manage-curation", element: <ManageCuration /> },
  { path: "/analyze-geneset", element: <AnalyzeGeneSet /> },
  { path: "/view-result", element: <ViewResults /> },
  { path: "/emphasis-gen", element: <EmphasisGenes /> },
  { path: "/manage-projects", element: <ManageProjects /> },
  { path: "/view-geneset", element: <ViewGenSets /> },
  { path: "/search-geneset", element: <SearchGeneSet /> },
  { path: "/upload-geneset", element: <UploadGeneSet /> },
  { path: "/batch-upload", element: <BatchUpload /> },
]);

export default router;
