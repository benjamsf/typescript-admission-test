import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EntriesPage from "./pages/EntriesPage";
import NewEntryPage from "./pages/NewEntry";
import NotFoundPage from "./pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<EntriesPage />} />
          <Route path="/new" element={<NewEntryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
