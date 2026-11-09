import { useEffect, useState } from "react";
import { fetchBooks, fetchSearchedBooks } from "../fetchApi/fetchBooks";
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

	const searchBooks = async (searchTerm, searchBy, language) => {
		const data = await fetchSearchedBooks(searchTerm, searchBy, language);
		setBooks(data);
	};

	return (
		<Container className="my-4">
			<SearchForm onSearchBooks={searchBooks} />
			<BookList books={books} />
		</Container>
	);
};

export default Home;
