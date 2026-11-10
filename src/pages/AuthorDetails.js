import { useParams } from "react-router-dom";
import BookList from "../components/BookList";
import { useEffect, useState } from "react";
import { fetchAuthorDetails } from "../fetchApi/fetch";
import { Container } from "react-bootstrap";
import Loader from "../components/Loader";

const AuthorDetails = () => {
	const params = useParams();

	const [author, setAuthor] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const loadAuthorData = async () => {
			try {
				setErrorMessage("");
				const data = await fetchAuthorDetails(params.id);
				setAuthor(data);
			} catch (error) {
				setErrorMessage("Something went wrong. Please try again.");
			}
			setIsLoading(false);
		};
		loadAuthorData();
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
	return (
		<Container className="my-4">
			<section className="author-details">
				<h1 className="author-details__name">{author.name}</h1>
				<div className="author-details__dates">
					<span>Born: {author.birthDate}</span>
					<span>Died: {author.deathDate}</span>
				</div>
				<p className="author-details__bio">{author.bio}</p>
			</section>

			<h2 className="author-details__works-heading">Works</h2>
			<BookList books={author.works} />
		</Container>
	);
};

export default AuthorDetails;
