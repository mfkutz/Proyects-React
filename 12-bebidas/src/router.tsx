import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavotitesPage from "./views/FavotitesPage"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/favoritos" element={<FavotitesPage />} />
            </Routes>
        </BrowserRouter>
    )
}
