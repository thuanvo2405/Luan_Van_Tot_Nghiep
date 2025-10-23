import { Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage";
import Layout from "./components/layout";
import SearchPage from "./page/searchpage";
import ProfilePage from "./page/profilepage";
import OrganizerPage from "./page/organizer";
import VerifyEmailPage from "./page/verifyemailpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
      </Route>
      <Route path="organizer" element={<OrganizerPage />} />
    </Routes>
  );
}

export default App;
