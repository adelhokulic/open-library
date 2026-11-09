import { useEffect, useState } from "react";
import { fetchBooks, fetchSearchedBooks } from "../fetchApi/fetchBooks";
import BookList from "../components/BookList";
import { Container } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";

const Home = () => {
	const [books, setBooks] = useState([]);
	const [booksLoading, setBooksLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");


	useEffect(() => {
		const loadBooksApi = async () => {
			try {
				setErrorMessage("");
				const data = await fetchBooks(1);
				setBooks(data.books);
			} catch (error) {
				setErrorMessage("Something went wrong. Please try again.");
			}
			setBooksLoading(false);
		};
		loadBooksApi();
	}, []);

	const searchBooks = async (searchTerm, searchBy, language) => {
		setBooksLoading(true);
		setErrorMessage("");
		try {
			const data =searchTerm==="" ? await fetchBooks(1) : await fetchSearchedBooks(searchTerm , searchBy, language, 1);
			setBooks(data.books);
		} catch (error) {
			setErrorMessage("Something went wrong. Please try again.");
		}
		setBooksLoading(false);
	};

	return (
		<Container className="my-4">
			{errorMessage && <p>{errorMessage}</p>}
			<SearchForm onSearchBooks={searchBooks} />
			{booksLoading ? (
				<Loader />
			) : books.length === 0 && !errorMessage ? (
				<p className="empty-message">No books found.</p>
			) : (
				<BookList books={books} />
			)}
		</Container>
	);
};

export default Home;
