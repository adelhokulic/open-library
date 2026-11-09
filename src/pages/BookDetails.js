import { useEffect, useState } from "react";
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
	if (errorMessage) return <p>{errorMessage}</p>;

	return <BookDetailsCard book={book} />;
};

export default BookDetails;
