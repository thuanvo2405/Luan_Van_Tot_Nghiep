import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/layout/layout";
import ResetPasswordPage from "./page/ResetPasswordPage";
import MyTicketPage from "./page/MyTicketPage";
import ProfileLayout from "./components/layout/profilelayout";
import AdminPage from "./page/AdminPage";
import EventPage from "./page/EventPage";
import SearchPage from "./page/SearchPage";
import VerifyEmailPage from "./page/VerifyEmailPage";
import ProfilePage from "./page/ProfilePage";
import OrganizerPage from "./page/OrganizerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="event" element={<EventPage />} />
        <Route element={<ProfileLayout />}>
          <Route path="my-profile" element={<ProfilePage />} />
          <Route path="my-tickets" element={<MyTicketPage />} />
        </Route>
      </Route>
      <Route path="organizer" element={<OrganizerPage />} />
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
