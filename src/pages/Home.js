import { useEffect, useState } from "react";
import { fetchBooks } from "../fetchApi/fetchBooks";

const Home = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const loadBooksApi = async () => {
			const data = await fetchBooks();
			setBooks(data.works);
		};
        loadBooksApi()
	}, []);

	console.log(books);
	return (
		<>
			<h1>Home page</h1>
		</>
	);
};

export default Home;
