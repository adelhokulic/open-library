import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../fetchApi/fetchBooks";
import Loader from "../components/Loader";
import BookDetailsCard from "../components/BookDetailsCard";

const BookDetails = () => {
	const params = useParams();

	const [book, setBook] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const loadBook = async () => {
			try {
				setErrorMessage("");
				const data = await fetchBookDetails(params.id);
				setBook(data);
			} catch (error) {
				setErrorMessage("Something went wrong. Please try again.");
			}
			setIsLoading(false);
		};
		loadBook();
	}, [params.id]);

	if (isLoading) return <Loader />;
	if (errorMessage)
		return (
			<Container className="my-4">
				<p className="error-message" role="alert">
					{errorMessage}
				</p>
			</Container>
		);

	return <BookDetailsCard book={book} />;
};

export default BookDetails;
