import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage";
import Layout from "./components/layout";
import SearchPage from "./page/searchpage";
import ProfilePage from "./page/profilepage";
import OrganizerPage from "./page/organizer";
import EventPage from "./page/eventpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="organizer" element={<OrganizerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
