import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/layout/layout";
import SearchPage from "./page/searchpage";
import ProfilePage from "./page/profilepage";
import OrganizerPage from "./page/organizer";
import VerifyEmailPage from "./page/verifyemailpage";
import ResetPasswordPage from "./page/ResetPasswordPage";
import MyTicketPage from "./page/myticketpage";
import ProfileLayout from "./components/layout/profilelayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route element={<ProfileLayout />}>
          <Route path="my-profile" element={<ProfilePage />} />
          <Route path="my-tickets" element={<MyTicketPage />} />
        </Route>
      </Route>
      <Route path="organizer" element={<OrganizerPage />} />
    </Routes>
  );
}

export default App;
