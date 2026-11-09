import { useEffect, useState } from "react";
import { fetchBooks } from "../fetchApi/fetchBooks";
import BookList from "../components/BookList";
import { Container } from "react-bootstrap";
import SearchForm from "../components/SearchForm";

const Home = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const loadBooksApi = async () => {
			const data = await fetchBooks();
			setBooks(data);
		};
		loadBooksApi();
	}, []);

	return (
		<Container className="my-4">
			<SearchForm />
			<BookList books={books} />
		</Container>
	);
};

export default Home;
