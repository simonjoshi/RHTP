import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProviderSearch from "./pages/ProviderSearch";
import SDoHScreening from "./pages/SDoHScreening";
import SearchRefinement from "./pages/SearchRefinement";
import ClientPortal from "./pages/ClientPortal";
import CallbackRequest from "./pages/CallbackRequest";
import CallbackDetails from "./pages/CallbackDetails";
import HipaaConsent from "./pages/HipaaConsent";
import AccountCreation from "./pages/AccountCreation";
import SignIn from "./pages/SignIn";
import CaseStatus from "./pages/CaseStatus";
import TokenDiagnostics from "./pages/TokenDiagnostics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/search-refinement",
    Component: SearchRefinement,
  },
  {
    path: "/provider-search",
    Component: ProviderSearch,
  },
  {
    path: "/sdoh-screening",
    Component: SDoHScreening,
  },
  {
    path: "/portal",
    Component: ClientPortal,
  },
  {
    path: "/client-portal",
    Component: ClientPortal,
  },
  {
    path: "/case-status",
    Component: CaseStatus,
  },
  {
    path: "/callback-request",
    Component: CallbackRequest,
  },
  {
    path: "/callback-details",
    Component: CallbackDetails,
  },
  {
    path: "/hipaa-consent",
    Component: HipaaConsent,
  },
  {
    path: "/account-creation",
    Component: AccountCreation,
  },
  {
    path: "/sign-in",
    Component: SignIn,
  },
  {
    path: "/token-diagnostics",
    Component: TokenDiagnostics,
  },
]);