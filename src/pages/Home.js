import { useEffect, useState } from "react";
import {
	books_per_page,
	fetchHomeBooks,
	fetchSearchedBooks,
} from "../fetchApi/fetchBooks";
import BookList from "../components/BookList";
import { Button, Container } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";

const Home = () => {
	const [books, setBooks] = useState([]);
	const [isBooksLoading, setIsBooksLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [totalBooks, setTotalBooks] = useState(0);
	const [lastSearch, setLastSearch] = useState({
		searchTerm: "",
		searchBy: "title",
		language: "",
	});
	const [searchParams] = useSearchParams();
	const subject = searchParams.get("subject") || null;

	useEffect(() => {
		const loadInitialBooks = async () => {
			try {
				setErrorMessage("");
				const data = subject
					? await fetchSearchedBooks(subject, "subject", "", 1)
					: await fetchHomeBooks(1);
				setBooks(data.books);
				setTotalBooks(data.total);
				setCurrentPage(1);
				setLastSearch({
					searchTerm: subject || "",
					searchBy: subject ? "subject" : "title",
					language: "",
				});
				setIsBooksLoading(true);
			} catch (error) {
				setErrorMessage("Something went wrong. Please try again.");
			}
			setIsBooksLoading(false);
		};
		loadInitialBooks();
	}, [subject]);

	const loadBooks = async (searchTerm, searchBy, language, pageToLoad = 1) => {
		setIsBooksLoading(true);
		setErrorMessage("");
		try {
			const data =
				searchTerm === ""
					? await fetchHomeBooks(pageToLoad)
					: await fetchSearchedBooks(
							searchTerm,
							searchBy,
							language,
							pageToLoad,
						);
			setBooks(data.books);
			setTotalBooks(data.total);
			setCurrentPage(pageToLoad);
			setLastSearch({
				searchTerm: searchTerm,
				searchBy: searchBy,
				language: language,
			});
		} catch (error) {
			setErrorMessage("Something went wrong. Please try again.");
		}
		setIsBooksLoading(false);
	};

	const changePage = (nextPage) => {
		loadBooks(
			lastSearch.searchTerm,
			lastSearch.searchBy,
			lastSearch.language,
			nextPage,
		);
	};
	return (
		<Container className="my-4">
			{errorMessage && (
				<p className="error-message" role="alert">
					{errorMessage}
				</p>
			)}
			<SearchForm onLoadBooks={loadBooks} />
			{isBooksLoading ? (
				<Loader />
			) : books.length === 0 && !errorMessage ? (
				<p className="empty-message">No books found.</p>
			) : (
				<BookList books={books} />
			)}
			{!isBooksLoading && books.length > 0 && (
				<div className="pagination-controls">
					<Button
						variant="outline-dark"
						className="pagination-controls__button"
						disabled={currentPage === 1}
						onClick={() => changePage(currentPage - 1)}
					>
						Previous
					</Button>
					<Button
						variant="dark"
						className="pagination-controls__button"
						disabled={currentPage >= Math.ceil(totalBooks / books_per_page)}
						onClick={() => changePage(currentPage + 1)}
					>
						Next
					</Button>
				</div>
			)}
		</Container>
	);
};

export default Home;
