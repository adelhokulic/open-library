import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
	
	return (
		<>
			<BrowserRouter>
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/book/:id" element={<BookDetails />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
