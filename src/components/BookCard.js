import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
	const coverSrc = book.coverId
		? `${process.env.REACT_APP_COVERS_API}/${book.coverId}-M.jpg`
		: "/no-cover.svg";
	return (
		<Link
			className="text-decoration-none text-reset d-block h-100"
			to={`/book/${book.id}`}
		>
			<Card className="book-card h-100">
				<Card.Img
					variant="top"
					className="book-card__cover"
					src={coverSrc}
					alt={book.title}
					loading="lazy"
				/>
				<Card.Body className="d-flex flex-column">
					<Card.Title className="book-card__title">{book.title}</Card.Title>
					<Card.Text className="book-card__authors text-secondary mb-2">
						{book.authors.join(", ")}
					</Card.Text>
					{book.year && (
						<Card.Text className="text-secondary small mt-auto">
							First edition: {book.year}
						</Card.Text>
					)}
				</Card.Body>
			</Card>
		</Link>
	);
};

export default BookCard;
